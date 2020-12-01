import {Resource} from '@lagoshny/ngx-hal-client';

export class Request extends Resource{

  id: number;
  creationDate: Date;
  description: string;

  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
