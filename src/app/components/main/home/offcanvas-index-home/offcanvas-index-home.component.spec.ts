import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasIndexHomeComponent } from './offcanvas-index-home.component';

describe('OffcanvasIndexHomeComponent', () => {
  let component: OffcanvasIndexHomeComponent;
  let fixture: ComponentFixture<OffcanvasIndexHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasIndexHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasIndexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
