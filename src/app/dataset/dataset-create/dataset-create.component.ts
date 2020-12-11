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
  public fileAttached = false;
  public content: string;
  public filename: string;

  constructor(private router: Router,
              private location: Location,
              private datasetService: DatasetService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.dataset = new Dataset();
  }

  addDataFile(event): void {
    const fileList: FileList = event.target.files;
    const FileToUpload: File = fileList[0];
    const reader = new FileReader();
    reader.readAsText(FileToUpload);
    reader.onloadend = (e) => {
      this.fileAttached = true;
      this.dataset.content = reader.result;
      this.filename = FileToUpload.name;
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
