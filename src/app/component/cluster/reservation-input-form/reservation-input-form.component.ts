import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationModel } from 'src/app/model/reservation.model';

@Component({
  selector: 'app-reservation-input-form',
  templateUrl: './reservation-input-form.component.html',
  styleUrls: ['./reservation-input-form.component.css'],
})
export class ReservationInputFormComponent implements OnInit {
  @Input() reservation!: ReservationModel;

  @Output() reservationSubmitTransit: EventEmitter<ReservationModel> =
    new EventEmitter<ReservationModel>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // 入力内容のバリデーション
    if (!this.reservation.startAt || !this.reservation.finishAt) {
      return;
    }

    this.reservationSubmitTransit.emit(this.reservation);
  }

  onCancel(): void {
    this.router.navigate(['/cluster', 'reservations']);
  }
}
