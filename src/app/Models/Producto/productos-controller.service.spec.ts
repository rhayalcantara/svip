import { TestBed } from '@angular/core/testing';

import { ProductosControllerService } from './productos-controller.service';

describe('ProductosControllerService', () => {
  let service: ProductosControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
