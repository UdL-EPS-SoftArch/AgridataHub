import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {DatasetService} from '../dataset.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Dataset} from '../dataset';
import {Sort} from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {
  public datasets: Dataset[] = [];
  public pageSize = 6;
  public page = 1;
  public totalDatasets = 0;
  private sorting: Sort[] = [{ path: 'createdAt', order: 'DESC' }];

  constructor(private router: Router,
              private location: Location,
              private datasetService: DatasetService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.datasetService.getAll({size: this.pageSize, sort: this.sorting, params: [{key: 'page', value: 0}]}).subscribe(
      (datasets: Dataset[]) => {
        this.datasets = datasets;
        this.totalDatasets = this.datasetService.totalElement();
      });
  }

  changePage(): void {
    this.datasetService.page(this.page - 1).subscribe(
      (datasets: Dataset[]) => {
        this.datasets = datasets;
      });
  }
}
