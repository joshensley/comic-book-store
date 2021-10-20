import { TestBed } from '@angular/core/testing';

import { ProductInventoryUnitService } from './product-inventory-unit.service';

describe('ProductInventoryUnitService', () => {
  let service: ProductInventoryUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInventoryUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
