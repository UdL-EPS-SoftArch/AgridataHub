import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { ReuserService } from '../reuser.service';
import { Reuser } from '../reuser';


@Component({
  selector: 'app-reuser-delete',
  templateUrl: './reuser-delete.component.html'
})
export class ReuserDeleteComponent implements OnInit {
  public reuser: Reuser = new Reuser();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reuserService: ReuserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reuserService.get(this.id).subscribe(
      reuser => this.reuser = reuser);
  }

  delete(): void {
    this.reuserService.delete(this.reuser).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
