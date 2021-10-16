import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationInputFormComponent } from './reservation-input-form.component';

describe('ReservationInputFormComponent', () => {
  let component: ReservationInputFormComponent;
  let fixture: ComponentFixture<ReservationInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationInputFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
