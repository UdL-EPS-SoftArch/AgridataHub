import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Provider } from './provider';

@Injectable()
export class ProviderService extends RestService<Provider> {

  constructor(injector: Injector) {
    super(Provider, 'providers', injector);
  }

  public findByUsernameContaining(text: string): Observable<Provider[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
