import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatasetService} from '../dataset.service';
import {Dataset} from '../dataset';
import {Provider} from '../../provider/provider';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.css']
})
export class DatasetDetailsComponent implements OnInit {
  public dataset: Dataset;
  private id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datasetService.get(this.id).subscribe((dataset: Dataset) => {
      this.dataset = dataset;
      dataset.getRelation(Provider, 'providedBy').subscribe((provider: Provider) => this.dataset.providedBy = provider);
    });
  }
}
