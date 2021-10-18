import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductImageComponent } from './delete-product-image.component';

describe('DeleteProductImageComponent', () => {
  let component: DeleteProductImageComponent;
  let fixture: ComponentFixture<DeleteProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
