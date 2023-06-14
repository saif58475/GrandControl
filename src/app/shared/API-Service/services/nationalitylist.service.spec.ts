import { TestBed } from '@angular/core/testing';

import { NationalitylistService } from './nationalitylist.service';

describe('NationalitylistService', () => {
  let service: NationalitylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalitylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
