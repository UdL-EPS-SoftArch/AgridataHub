import { Component, OnInit } from '@angular/core';
import {DatasetRequestService} from '../DatasetRequest.service';
import {DatasetRequest} from '../DatasetRequest';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dataset-request-detail',
  templateUrl: './DatasetRequest-detail.component.html',
  styleUrls: ['./DatasetRequest-detail.component.css']
})
export class DatasetRequestDetailComponent implements OnInit {

  public datasetRequest: DatasetRequest = new DatasetRequest();
  constructor(private router: Router, private route: ActivatedRoute, private datasetRequestService: DatasetRequestService) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    const id = 4;
    this.datasetRequestService.get(id).subscribe((datasetRequest: DatasetRequest) => {
      this.datasetRequest = datasetRequest;
    });
  }
}
