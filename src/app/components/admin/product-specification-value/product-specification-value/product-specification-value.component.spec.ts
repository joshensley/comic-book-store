import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificationValueComponent } from './product-specification-value.component';

describe('ProductSpecificationValueComponent', () => {
  let component: ProductSpecificationValueComponent;
  let fixture: ComponentFixture<ProductSpecificationValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpecificationValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecificationValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
