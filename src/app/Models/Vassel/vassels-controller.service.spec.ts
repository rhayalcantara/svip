import { TestBed } from '@angular/core/testing';

import { VasselsControllerService } from './vassels-controller.service';

describe('VasselsControllerService', () => {
  let service: VasselsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VasselsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
