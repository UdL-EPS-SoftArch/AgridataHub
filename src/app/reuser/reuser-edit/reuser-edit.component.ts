import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { ReuserService } from '../reuser.service';
import { Reuser } from '../reuser';

@Component({
  selector: 'app-reuser-edit',
  templateUrl: './reuser-edit.component.html'
})
export class ReuserEditComponent implements OnInit {
  public reuser: Reuser = new Reuser();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reuserService: ReuserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.reuserService.get(id).subscribe(
      (reuser: Reuser) => this.reuser = reuser);
  }

  onSubmit(): void {
    this.reuser.password = this.reuser.passwordReset ? this.reuser.password : undefined; // Don't edit if not a reset
    this.reuserService.patch(this.reuser).subscribe(
      (patchedReuser: Reuser) => {
        if (this.reuser.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.reuser.id, this.reuser.password).subscribe(
            (reuser: Reuser) => this.router.navigate(['users', reuser.id]));
        } else {
          this.router.navigate(['reusers', patchedReuser.id]);
        }
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
