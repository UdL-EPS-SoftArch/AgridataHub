import { TestBed } from '@angular/core/testing';

import { DatasetRequestService } from './DatasetRequest.service';

describe('DatasetRequestService', () => {
  let service: DatasetRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasetRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
