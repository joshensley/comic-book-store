import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductSpecificationComponent } from './create-product-specification.component';

describe('CreateProductSpecificationComponent', () => {
  let component: CreateProductSpecificationComponent;
  let fixture: ComponentFixture<CreateProductSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
