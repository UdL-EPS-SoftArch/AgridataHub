import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';



@Component({
  selector: 'app-provider-delete',
  templateUrl: './provider-delete.component.html'
})
export class ProviderDeleteComponent implements OnInit {
  public provider: Provider = new Provider();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private providerService: ProviderService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.providerService.get(this.id).subscribe(
      provider => this.provider = provider);
  }

  delete(): void {
    this.providerService.delete(this.provider).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
