import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCartComponent } from './index-cart.component';

describe('IndexCartComponent', () => {
  let component: IndexCartComponent;
  let fixture: ComponentFixture<IndexCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
