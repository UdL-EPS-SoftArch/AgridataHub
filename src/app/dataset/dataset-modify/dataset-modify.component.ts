import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatasetService} from '../dataset.service';
import {Dataset} from '../dataset';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dataset-modify',
  templateUrl: './dataset-modify.component.html',
  styleUrls: ['./dataset-modify.component.css']
})
export class DatasetModifyComponent implements OnInit {
  public dataset: Dataset;
  public prevDatasetTitle: string;
  public id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datasetService.get(this.id).subscribe((dataset: Dataset) => {
      this.dataset = dataset;
      this.prevDatasetTitle = dataset.title;
    });
  }

  onSubmit(): void {
    this.datasetService.update(this.dataset).subscribe(
      (newDataset: Dataset) => {
        this.router.navigate(['/datasets/' + this.id]);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }

}
