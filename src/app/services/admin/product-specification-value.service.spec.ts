import { TestBed } from '@angular/core/testing';

import { ProductSpecificationValueService } from './product-specification-value.service';

describe('ProductSpecificationValueService', () => {
  let service: ProductSpecificationValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSpecificationValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
