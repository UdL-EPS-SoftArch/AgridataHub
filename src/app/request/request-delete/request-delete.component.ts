import { Component, OnInit } from '@angular/core';
import {Request} from '../request';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-delete',
  templateUrl: './request-delete.component.html',
})
export class RequestDeleteComponent implements OnInit {

  public id: string;
  public request: Request = new Request();
  constructor(private router: Router, private route: ActivatedRoute, private requestSerice: RequestService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.requestSerice.get(this.id).subscribe(
      request => this.request = request);
  }
  delete(): void {
    this.requestSerice.delete(this.request).subscribe(
      () => {
        this.router.navigate(['requests']);
      });
  }

}
