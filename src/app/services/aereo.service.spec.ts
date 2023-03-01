import { TestBed } from '@angular/core/testing';

import { AereoService } from './aereo.service';

describe('AereoService', () => {
  let service: AereoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AereoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
