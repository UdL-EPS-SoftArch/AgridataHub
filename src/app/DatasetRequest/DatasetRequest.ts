import {Resource} from '@lagoshny/ngx-hal-client';
import {Dataset} from '../dataset/dataset';
import {Request} from '../request/request';
export class DatasetRequest extends Resource{

  id: number;
  granted: boolean;
  requestedIn: Request;
  requestOf: Dataset;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
