import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarIndexHomeComponent } from './search-bar-index-home.component';

describe('SearchBarIndexHomeComponent', () => {
  let component: SearchBarIndexHomeComponent;
  let fixture: ComponentFixture<SearchBarIndexHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarIndexHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarIndexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
