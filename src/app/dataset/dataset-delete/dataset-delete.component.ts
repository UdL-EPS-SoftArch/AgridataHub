import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatasetService} from '../dataset.service';
import {Dataset} from '../dataset';

@Component({
  selector: 'app-dataset-delete',
  templateUrl: './dataset-delete.component.html',
  styleUrls: ['./dataset-delete.component.css']
})
export class DatasetDeleteComponent implements OnInit {
  public dataset: Dataset;
  public id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private datasetService: DatasetService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datasetService.get(this.id).subscribe((dataset: Dataset) => {
      this.dataset = dataset;
    });
  }

  delete(): void {
    this.datasetService.delete(this.dataset).subscribe(
      () => this.router.navigate(['datasets'])
    );
  }

}
