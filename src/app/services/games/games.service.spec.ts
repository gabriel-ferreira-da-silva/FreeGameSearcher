import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Games);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
