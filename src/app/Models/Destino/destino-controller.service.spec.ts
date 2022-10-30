import { TestBed } from '@angular/core/testing';

import { DestinoControllerService } from './destino-controller.service';

describe('DestinoControllerService', () => {
  let service: DestinoControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinoControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
