import { TestBed } from '@angular/core/testing';

import { WheatService } from './wheat.service';

describe('WheatService', () => {
  let service: WheatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
