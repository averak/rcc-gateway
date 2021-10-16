import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { ReservationModel } from 'src/app/model/reservation.model';

@Component({
  selector: 'app-reservation-input-form',
  templateUrl: './reservation-input-form.component.html',
  styleUrls: ['./reservation-input-form.component.css'],
})
export class ReservationInputFormComponent implements OnInit {
  @Input() reservation!: ReservationModel;
  reservationTime: number = 0;

  @Output() reservationSubmitTransit: EventEmitter<ReservationModel> =
    new EventEmitter<ReservationModel>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setReservationTime();
  }

  getDatetimeString(date: Date): string {
    return moment(date).tz('Asia/Tokyo').format().slice(0, 16);
  }

  setReservationTime(): void {
    this.reservationTime = this.reservation.finishAt.getTime() - this.reservation.startAt.getTime();
  }

  onChangeStartAt(event: any): void {
    if (event.target.value === '') {
      return;
    }

    this.reservation.startAt = new Date(event.target.value);
    this.reservation.finishAt.setTime(this.reservation.startAt.getTime() + this.reservationTime);
    this.setReservationTime();
  }

  onChangeFinishAt(event: any): void {
    if (event.target.value === '') {
      return;
    }

    this.reservation.finishAt = new Date(event.target.value);
    this.setReservationTime();
  }

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
