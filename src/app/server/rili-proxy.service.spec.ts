import { TestBed } from '@angular/core/testing';

import { RiliProxyService } from './rili-proxy.service';

describe('RiliProxyService', () => {
  let service: RiliProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiliProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
