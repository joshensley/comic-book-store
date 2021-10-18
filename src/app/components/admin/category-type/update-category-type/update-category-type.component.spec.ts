import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryTypeComponent } from './update-category-type.component';

describe('UpdateCategoryTypeComponent', () => {
  let component: UpdateCategoryTypeComponent;
  let fixture: ComponentFixture<UpdateCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
