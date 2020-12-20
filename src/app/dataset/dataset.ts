import {Resource} from '@lagoshny/ngx-hal-client';
import {Provider} from '../provider/provider';

export class Dataset extends Resource {
  id: number;
  title: string;
  description: string;
  content: string | ArrayBuffer;
  createdAt: Date;
  contentType: string;
  providedBy: Provider;

  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
