/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeatBookingComponent } from './seat-booking.component';

describe('SeatBookingComponent', () => {
  let component: SeatBookingComponent;
  let fixture: ComponentFixture<SeatBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatBookingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
