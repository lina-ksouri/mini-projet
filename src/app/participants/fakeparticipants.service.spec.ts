import { TestBed } from '@angular/core/testing';

import { FakeparticipantsService } from './fakeparticipants.service';

describe('FakeparticipantsService', () => {
  let service: FakeparticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeparticipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
