import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductSpecificationComponent } from './delete-product-specification.component';

describe('DeleteProductSpecificationComponent', () => {
  let component: DeleteProductSpecificationComponent;
  let fixture: ComponentFixture<DeleteProductSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
