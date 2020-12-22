import { Component, OnInit } from '@angular/core';
import {Request} from '../request';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  public id: string;
  public request: Request = new Request();
  public descrip: string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService,
              private authenticationService: AuthenticationBasicService,
              private location: Location)
  { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.requestService.get(this.id).subscribe((request: Request) => {
      this.request = request;
      this.descrip = request.description;
    });
  }
  onSubmit(): void {
    this.requestService.update(this.request).subscribe(
      (newRequest: Request) => {
        this.router.navigate(['/requests/' + this.id]);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }

}
