import { TestBed } from '@angular/core/testing';

import { TextFileService } from './text-file.service';

describe('TextFileService', () => {
  let service: TextFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
