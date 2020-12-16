import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReuserService } from '../reuser.service';
import { Reuser } from '../reuser';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';



@Component({
  selector: 'app-reuser-detail',
  templateUrl: './reuser-detail.component.html'
})
export class ReuserDetailComponent implements OnInit {
  public reuser: Reuser = new Reuser();

  constructor(private route: ActivatedRoute,
              private reuserService: ReuserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.reuserService.get(id).subscribe(
      reuser => {
        this.reuser = reuser;
      });
  }

  getCurrentUser(): Reuser {
    return this.authenticationService.getCurrentUser();
  }
}
