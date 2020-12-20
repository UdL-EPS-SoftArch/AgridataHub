import {Resource} from '@lagoshny/ngx-hal-client';
import {Dataset} from '../dataset/dataset';

export class DatasetRequest extends Resource{

  id: number;
  granted: boolean;
  description: string;
  requestedIn: Request;
  requestOf: Dataset;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
