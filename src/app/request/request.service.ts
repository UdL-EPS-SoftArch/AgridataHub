import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Request} from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends RestService<Request>{
  constructor(injector: Injector) {
    super(Request, 'requests', injector);
  }
}
