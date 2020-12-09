import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Request} from '../request';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {RequestService} from '../request.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  public request: Request;
  public successAlert: boolean;

  constructor(private router: Router,
              private location: Location,
              private requestService: RequestService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.request = new Request();
  }
  onSubmit(): void {
    this.requestService.create(this.request).subscribe(
      (request: Request) => this.router.navigate(['/requests'])
    );
  }
  closeAlert(): void {
    this.successAlert = false;
  }

}
