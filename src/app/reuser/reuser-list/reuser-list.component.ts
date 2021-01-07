import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReuserService } from '../reuser.service';
import { Sort } from '@lagoshny/ngx-hal-client';
import { Reuser } from '../reuser';

@Component({
  selector: 'app-reuser-list',
  templateUrl: './reuser-list.component.html'
})
export class ReuserListComponent implements OnInit {
  public reusers: Reuser[] = [];
  public pageSize = 5;
  public page = 1;
  public totalReusers = 0;
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(
    public router: Router,
    private reuserService: ReuserService) {
  }

  ngOnInit(): void {
    this.reuserService.getAll({sort: this.sorting}).subscribe(
      (reusers: Reuser[]) => {
        this.reusers = reusers;
        this.totalReusers = this.reuserService.totalElement();
      });
  }

  detail(reuser: Reuser): void {
    this.router.navigate(['reusers', reuser.id]);
  }
}
