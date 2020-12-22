import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html'
})
export class ProviderEditComponent implements OnInit {
  public provider: Provider = new Provider();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private providerService: ProviderService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.providerService.get(id).subscribe(
      (provider: Provider) => this.provider = provider);
  }

  onSubmit(): void {
    this.provider.password = this.provider.passwordReset ? this.provider.password : undefined; // Don't edit if not a reset
    this.providerService.patch(this.provider).subscribe(
      (patchedProvider: Provider) => {
        if (this.provider.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.provider.id, this.provider.password).subscribe(
            (provider: Provider) => this.router.navigate(['providers', provider.id]));
        } else {
          this.router.navigate(['providers', patchedProvider.id]);
        }
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
