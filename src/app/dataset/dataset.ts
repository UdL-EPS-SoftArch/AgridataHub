import {Resource} from '@lagoshny/ngx-hal-client';

export class Dataset extends Resource {
  id: number;
  title: string;
  description: string;
  createdAt: Date;

  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
