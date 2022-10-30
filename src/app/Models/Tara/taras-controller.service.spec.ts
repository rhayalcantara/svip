import { TestBed } from '@angular/core/testing';

import { TarasControllerService } from './taras-controller.service';

describe('TarasControllerService', () => {
  let service: TarasControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarasControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
