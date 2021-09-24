import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsHistoriesComponent } from './reservations-histories.component';

describe('ReservationsHistoriesComponent', () => {
  let component: ReservationsHistoriesComponent;
  let fixture: ComponentFixture<ReservationsHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationsHistoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
