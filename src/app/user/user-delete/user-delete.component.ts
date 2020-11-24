import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html'
})
export class UserDeleteComponent implements OnInit {
  public user: User = new User();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.get(this.id).subscribe(
      user => this.user = user);
  }

  delete() {
    this.userService.delete(this.user).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
