import { Component, OnInit } from '@angular/core';
import {Data, Router} from '@angular/router';
import {DatasetRequest} from '../DatasetRequest';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {DatasetRequestService} from '../DatasetRequest.service';
import {Request} from '../../request/request';
import {Dataset} from '../../dataset/dataset';

import {RequestService} from '../../request/request.service';
import {DatasetService} from '../../dataset/dataset.service';

import {Sort} from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-dataset-request-create',
  templateUrl: './DatasetRequest-create.component.html',
  styleUrls: ['./DatasetRequest-create.component.css']
})
export class DatasetRequestCreateComponent implements OnInit {
  public requests: Request[];
  public datasets: Dataset[];
  public datasetRequest: DatasetRequest;
  public successAlert: boolean;
  private sorting: Sort[] = [{path: 'date', order: 'DESC'}];
  public pageSize = 5;
  public page = 1;

  public requestedInIndex = 0;
  public requestOfIndex = 0;

  constructor(private router: Router,
              private location: Location,
              private requestService: RequestService,
              private datasetService: DatasetService,
              private datasetRequestService: DatasetRequestService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.requestService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (requests: Request[]) => {
        this.requests = requests;
      });

    this.datasetService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (datasets: Dataset[]) => {
        this.datasets = datasets;
      });

    this.datasetRequest = new DatasetRequest();
  }
  onSubmit(): void {
    this.datasetRequest.requestedIn = this.requests[this.requestedInIndex];
    this.datasetRequest.requestOf = this.datasets[this.requestOfIndex];

    this.datasetRequestService.create(this.datasetRequest).subscribe(
      (newDatasetRequest: DatasetRequest) => {
        this.router.navigate(['/datasetRequests']);
      }
    );
  }
  closeAlert(): void {
    this.successAlert = false;
  }

}
