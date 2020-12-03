import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {Reuser} from '../reuser';
import { Location } from '@angular/common';
import {User} from '../../login-basic/user';
import {ReuserService} from '../reuser.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './reuser-register.component.html'
})
export class ReuserRegisterComponent implements OnInit {
  public reuser: Reuser;

  constructor(private router: Router,
              private location: Location,
              private reuserservice: ReuserService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.reuser = new Reuser();
  }

  onSubmit(): void {
    this.reuserservice.create(this.reuser).subscribe(
      (newReuser: Reuser) => {
        this.authenticationBasicService.login(newReuser.id, newReuser.password).subscribe(
          (reuser: Reuser) => this.router.navigate(['']));
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
