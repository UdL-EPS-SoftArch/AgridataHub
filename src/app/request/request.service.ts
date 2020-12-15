import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Request} from './request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends RestService<Request>{
  constructor(injector: Injector) {
    super(Request, 'requests', injector);
  }

  public findById(uri: string): Observable<Request> {
    const options: any = {params: [{key: 'id', value: uri}]};
    return this.searchSingle('findById', options);
  }
}
