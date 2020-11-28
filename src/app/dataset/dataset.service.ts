import { Injectable, Injector } from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Dataset} from './dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService extends RestService<Dataset>{
  constructor(injector: Injector) {
    super(Dataset, 'datasets', injector);
  }
}
