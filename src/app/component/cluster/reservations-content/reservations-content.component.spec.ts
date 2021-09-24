import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsContentComponent } from './reservations-content.component';

describe('ReservationsContentComponent', () => {
  let component: ReservationsContentComponent;
  let fixture: ComponentFixture<ReservationsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationsContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
