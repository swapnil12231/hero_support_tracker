import { TestBed } from '@angular/core/testing';

import { MusicOnHoldService } from './music-on-hold.service';

describe('MusicOnHoldService', () => {
  let service: MusicOnHoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicOnHoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
