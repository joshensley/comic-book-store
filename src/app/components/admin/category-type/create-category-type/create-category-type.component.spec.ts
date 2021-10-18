import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryTypeComponent } from './create-category-type.component';

describe('CreateCategoryTypeComponent', () => {
  let component: CreateCategoryTypeComponent;
  let fixture: ComponentFixture<CreateCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
