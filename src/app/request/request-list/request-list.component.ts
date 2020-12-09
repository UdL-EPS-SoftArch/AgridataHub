import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Request} from '../request';
import {RequestService} from '../request.service';
import {Sort} from '@lagoshny/ngx-hal-client';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  public requests: Request[] = [];
  private sorting: Sort[] = [{path: 'date', order: 'DESC'}];
  public pageSize = 5;
  public page = 1;
  public totalRequest = 0;

  constructor(public router: Router,
              private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (requests: Request[]) => {
        this.requests = requests;
        this.totalRequest = this.requestService.totalElement();
      });
  }
}
