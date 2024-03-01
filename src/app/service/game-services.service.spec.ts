import { TestBed } from '@angular/core/testing';

import { GameServicesService } from './game-services.service';

describe('GameServicesService', () => {
  let service: GameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
