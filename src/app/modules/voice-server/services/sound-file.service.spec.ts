import { TestBed } from '@angular/core/testing';

import { SoundFileService } from './sound-file.service';

describe('SoundFileService', () => {
  let service: SoundFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
