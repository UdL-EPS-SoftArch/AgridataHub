import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatasetRequest} from '../DatasetRequest';
import {DatasetRequestService} from '../DatasetRequest.service';
import {Sort} from '@lagoshny/ngx-hal-client';
import {Dataset} from '../../dataset/dataset';
import {Request} from '../../request/request';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';


@Component({
  selector: 'app-dataset-request-list',
  templateUrl: './DatasetRequest-list.component.html',
  styleUrls: ['./DatasetRequest-list.component.css']
})
export class DatasetRequestListComponent implements OnInit {
  public datasetRequests: DatasetRequest[] = [];
  public datasetRequest: DatasetRequest = new DatasetRequest();
  public datasets: Dataset[] = [];
  private sorting: Sort[] = [{path: 'date', order: 'DESC'}];
  public pageSize = 6;
  public page = 1;
  public totalDatasetRequests = 0;

  constructor(public router: Router,
              private datasetRequestService: DatasetRequestService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.datasetRequestService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (datasetRequests: DatasetRequest[]) => {
        this.datasetRequests = datasetRequests;
        this.datasetRequests.forEach((datasetRequest): void => {
          datasetRequest.getRelation(Dataset, 'requestOf').subscribe((dataset: Dataset) => datasetRequest.requestOf = dataset);
          datasetRequest.getRelation(Request, 'requestedIn').subscribe((request: Request) => datasetRequest.requestedIn = request);
        });
        this.totalDatasetRequests = this.datasetRequestService.totalElement();
      });
  }

  changePage(): void {
    this.datasetRequestService.page(this.page - 1).subscribe(
      (datasetRequests: DatasetRequest[]) => {
        this.datasetRequests = datasetRequests;
      });
  }
}
