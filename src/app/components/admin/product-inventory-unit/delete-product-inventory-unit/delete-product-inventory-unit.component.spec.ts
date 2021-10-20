import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductInventoryUnitComponent } from './delete-product-inventory-unit.component';

describe('DeleteProductInventoryUnitComponent', () => {
  let component: DeleteProductInventoryUnitComponent;
  let fixture: ComponentFixture<DeleteProductInventoryUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductInventoryUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductInventoryUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
