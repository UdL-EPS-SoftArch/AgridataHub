import { Component, OnInit } from '@angular/core';
import {Dataset} from '../dataset';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {DatasetService} from '../dataset.service';

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
  addDataFile(event): void {
    const fileList: FileList = event.target.files;
    const FileToUpload: File = fileList[0];
    const reader = new FileReader();
    reader.readAsText(FileToUpload);
    reader.onloadend = (e) => {
      this.dataset.content = reader.result;
      this.dataset.contentType = FileToUpload.type;
    };

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
