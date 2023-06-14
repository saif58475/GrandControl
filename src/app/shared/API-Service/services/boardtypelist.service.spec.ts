import { TestBed } from '@angular/core/testing';

import { BoardtypelistService } from './boardtypelist.service';

describe('BoardtypelistService', () => {
  let service: BoardtypelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardtypelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
