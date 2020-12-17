import { Component, OnInit } from '@angular/core';
import {Request} from '../request';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  public request: Request = new Request();
  constructor(private router: Router, private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.get(id).subscribe((request: Request) => {
      this.request = request;
    });
  }
}
