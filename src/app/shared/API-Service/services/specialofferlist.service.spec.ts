import { TestBed } from '@angular/core/testing';

import { SpecialofferlistService } from './specialofferlist.service';

describe('SpecialofferlistService', () => {
  let service: SpecialofferlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialofferlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
