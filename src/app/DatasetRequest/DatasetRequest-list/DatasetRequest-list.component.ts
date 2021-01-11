import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatasetRequest} from '../DatasetRequest';
import {DatasetRequestService} from '../DatasetRequest.service';
import {Sort} from '@lagoshny/ngx-hal-client';


@Component({
  selector: 'app-dataset-request-list',
  templateUrl: './DatasetRequest-list.component.html',
  styleUrls: ['./DatasetRequest-list.component.css']
})
export class DatasetRequestListComponent implements OnInit {
  public datasetRequests: DatasetRequest[] = [];
  private sorting: Sort[] = [{path: 'date', order: 'DESC'}];
  public pageSize = 5;
  public page = 1;
  public totalDatasetRequests = 0;

  constructor(public router: Router,
              private datasetRequestService: DatasetRequestService) { }

  ngOnInit(): void {
    this.datasetRequestService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (datasetRequests: DatasetRequest[]) => {
        this.datasetRequests = datasetRequests;
        this.totalDatasetRequests = this.datasetRequestService.totalElement();
      });
  }
}
