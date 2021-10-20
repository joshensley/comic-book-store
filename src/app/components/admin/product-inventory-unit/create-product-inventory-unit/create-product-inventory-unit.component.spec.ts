import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductInventoryUnitComponent } from './create-product-inventory-unit.component';

describe('CreateProductInventoryUnitComponent', () => {
  let component: CreateProductInventoryUnitComponent;
  let fixture: ComponentFixture<CreateProductInventoryUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductInventoryUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductInventoryUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
