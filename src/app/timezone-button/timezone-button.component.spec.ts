import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneButtonComponent } from './timezone-button.component';

describe('TimezoneButtonComponent', () => {
  let component: TimezoneButtonComponent;
  let fixture: ComponentFixture<TimezoneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
