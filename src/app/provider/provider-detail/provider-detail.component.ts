import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';




@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html'
})
export class ProviderDetailComponent implements OnInit {
  public provider: Provider = new Provider();

  constructor(private route: ActivatedRoute,
              private providerService: ProviderService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.providerService.get(id).subscribe(
      provider => {
        this.provider = provider;
      });
  }

  getCurrentUser(): Provider {
    return this.authenticationService.getCurrentUser();
  }
}
