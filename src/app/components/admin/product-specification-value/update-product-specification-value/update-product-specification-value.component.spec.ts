import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductSpecificationValueComponent } from './update-product-specification-value.component';

describe('UpdateProductSpecificationValueComponent', () => {
  let component: UpdateProductSpecificationValueComponent;
  let fixture: ComponentFixture<UpdateProductSpecificationValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductSpecificationValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductSpecificationValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
