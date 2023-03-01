import { TestBed } from '@angular/core/testing';

import { VoloService } from './volo.service';

describe('VoloService', () => {
  let service: VoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
