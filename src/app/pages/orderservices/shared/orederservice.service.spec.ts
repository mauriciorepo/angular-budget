import { TestBed } from '@angular/core/testing';

import { OrederserviceService } from './orderService.service';

describe('OrederserviceService', () => {
  let service: OrederserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrederserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
