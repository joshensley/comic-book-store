import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoryUnitComponent } from './product-inventory-unit.component';

describe('ProductInventoryUnitComponent', () => {
  let component: ProductInventoryUnitComponent;
  let fixture: ComponentFixture<ProductInventoryUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInventoryUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInventoryUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
