import { TestBed } from '@angular/core/testing';

import { PlayerFetchApiService } from './player-fetch-api.service';

describe('PlayerFetchApiService', () => {
  let service: PlayerFetchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerFetchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
