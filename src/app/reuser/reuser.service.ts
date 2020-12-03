import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Reuser } from './reuser';

@Injectable()
export class ReuserService extends RestService<Reuser> {

  constructor(injector: Injector) {
    super(Reuser, 'reusers', injector);
  }

  public findByUsernameContaining(text: string): Observable<Reuser[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
