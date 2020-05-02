import { TestBed } from '@angular/core/testing';

import { TranshistoryService } from './transhistory.service';

describe('TranshistoryService', () => {
  let service: TranshistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranshistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
