import { Component, OnInit } from '@angular/core';
import {Dataset} from '../dataset';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {DatasetService} from '../dataset.service';

@Component({
  selector: 'app-dataset-create',
  templateUrl: './dataset-create.component.html',
  styleUrls: ['./dataset-create.component.css']
})
export class DatasetCreateComponent implements OnInit {
  public dataset: Dataset;
  public successAlert: boolean;

  constructor(private router: Router,
              private location: Location,
              private datasetService: DatasetService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.dataset = new Dataset();
  }

  onSubmit(): void {
    this.datasetService.create(this.dataset).subscribe(
      (newDataset: Dataset) => {
        this.router.navigate(['/datasets/create']);
        this.successAlert = true;
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }

  closeAlert(): void {
    this.successAlert = false;
  }
}
