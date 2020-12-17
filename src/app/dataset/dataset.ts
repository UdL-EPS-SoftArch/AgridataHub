import {Resource} from '@lagoshny/ngx-hal-client';
import {Provider} from '../provider/provider';

export class Dataset extends Resource {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  providedBy: Provider;

  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
