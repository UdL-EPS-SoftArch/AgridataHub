import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatasetRequest} from '../DatasetRequest';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {DatasetRequestService} from '../DatasetRequest.service';
import {Request} from 'Request/request';
import {RequestService} from '../../request/request.service';
import {Sort} from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-DatasetRequest-create',
  templateUrl: './DatasetRequest-create.component.html',
  styleUrls: ['./DatasetRequest-create.component.css']
})
export class DatasetRequestCreateComponent implements OnInit {
  public requests: Request[];
  public datasetRequest: DatasetRequest;
  public successAlert: boolean;
  private sorting: Sort[] = [{path: 'date', order: 'DESC'}];
  public pageSize = 5;
  public page = 1;
  public totalRequest = 0;

  constructor(private router: Router,
              private location: Location,
              private requestService: RequestService,
              private datasetRequestService: DatasetRequestService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.requestService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (requests: Request[]) => {
        this.requests = requests;
        this.totalRequest = this.requestService.totalElement();
      });
    this.datasetRequest = new DatasetRequest();
  }
  onSubmit(): void {
    this.datasetRequestService.create(this.datasetRequest).subscribe(
      (request: DatasetRequest) => this.router.navigate(['/DatasetRequest'])
    );
  }
  closeAlert(): void {
    this.successAlert = false;
  }

}
