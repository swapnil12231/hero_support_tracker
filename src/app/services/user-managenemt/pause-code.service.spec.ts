import { TestBed } from '@angular/core/testing';

import { PauseCodeService } from './pause-code.service';

describe('PauseCodeService', () => {
  let service: PauseCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PauseCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
