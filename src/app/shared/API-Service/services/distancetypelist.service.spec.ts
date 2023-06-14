import { TestBed } from '@angular/core/testing';

import { DistancetypelistService } from './distancetypelist.service';

describe('DistancetypelistService', () => {
  let service: DistancetypelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistancetypelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
