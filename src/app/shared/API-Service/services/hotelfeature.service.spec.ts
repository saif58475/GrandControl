import { TestBed } from '@angular/core/testing';

import { HotelfeatureService } from './hotelfeature.service';

describe('HotelfeatureService', () => {
  let service: HotelfeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelfeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
