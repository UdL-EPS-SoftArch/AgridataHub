import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {DatasetRequest} from './DatasetRequest';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetRequestService extends RestService<DatasetRequest>{
  constructor(injector: Injector) {
    super(DatasetRequest, 'datasetRequests', injector);
  }

  public findById(uri: string): Observable<DatasetRequest> {
    const options: any = {params: [{key: 'id', value: uri}]};
    return this.searchSingle('findById', options);
  }
}
