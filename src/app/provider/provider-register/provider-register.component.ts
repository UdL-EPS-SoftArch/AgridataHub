import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import {User} from '../../login-basic/user';
import {ProviderService} from '../provider.service';
import {Provider} from '../provider';

@Component({
  selector: 'app-user-register',
  templateUrl: './provider-register.component.html'
})
export class ProviderRegisterComponent implements OnInit {
  public provider: Provider;

  constructor(private router: Router,
              private location: Location,
              private providerservice: ProviderService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.provider = new Provider();
  }

  onSubmit(): void {
    this.providerservice.create(this.provider).subscribe(
      (newProvider: Provider) => {
        this.authenticationBasicService.login(newProvider.id, newProvider.password).subscribe(
          (provider: Provider) => this.router.navigate(['']));
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
