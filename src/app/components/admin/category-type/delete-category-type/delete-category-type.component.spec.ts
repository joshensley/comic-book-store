import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryTypeComponent } from './delete-category-type.component';

describe('DeleteCategoryTypeComponent', () => {
  let component: DeleteCategoryTypeComponent;
  let fixture: ComponentFixture<DeleteCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
