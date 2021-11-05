import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCheckOutComponent } from './index-check-out.component';

describe('IndexCheckOutComponent', () => {
  let component: IndexCheckOutComponent;
  let fixture: ComponentFixture<IndexCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCheckOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
