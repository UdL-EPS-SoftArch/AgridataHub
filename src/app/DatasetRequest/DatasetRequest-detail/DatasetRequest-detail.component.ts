import { Component, OnInit } from '@angular/core';
import {DatasetRequestService} from '../DatasetRequest.service';
import {DatasetRequest} from '../DatasetRequest';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../../request/request';
import {Dataset} from '../../dataset/dataset';

@Component({
  selector: 'app-dataset-request-detail',
  templateUrl: './DatasetRequest-detail.component.html',
  styleUrls: ['./DatasetRequest-detail.component.css']
})
export class DatasetRequestDetailComponent implements OnInit {

  public datasetRequest: DatasetRequest = new DatasetRequest();
  constructor(private router: Router, private route: ActivatedRoute, private datasetRequestService: DatasetRequestService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.datasetRequestService.get(id).subscribe((datasetRequest: DatasetRequest) => {
      this.datasetRequest = datasetRequest;
      datasetRequest.getRelation(Dataset, 'requestOf').subscribe((dataset: Dataset) =>
        this.datasetRequest.requestOf = dataset);
      datasetRequest.getRelation(Request, 'requestedIn').subscribe((request: Request) =>
        this.datasetRequest.requestedIn = request);

    });
  }
}
