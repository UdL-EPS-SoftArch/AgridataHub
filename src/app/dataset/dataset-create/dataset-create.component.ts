import { Component, OnInit } from '@angular/core';
import {Dataset} from '../dataset';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {DatasetService} from '../dataset.service';
import {Provider} from "../../provider/provider";

@Component({
  selector: 'app-dataset-create',
  templateUrl: './dataset-create.component.html',
  styleUrls: ['./dataset-create.component.css']
})
export class DatasetCreateComponent implements OnInit {
  public dataset: Dataset;

  constructor(private router: Router,
              private location: Location,
              private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.dataset = new Dataset();
  }

  onSubmit(): void {
    this.datasetService.create(this.dataset).subscribe(
      (newDataset: Dataset) => {
        this.router.navigate(['/datasets/']);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }
}
