import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { ReservationModel } from 'src/app/model/reservation.model';
import { ReservationCreateRequest } from 'src/app/request/reservation.request';

@Component({
  selector: 'app-reservations-new',
  templateUrl: './reservations-new.component.html',
  styleUrls: ['./reservations-new.component.css'],
})
export class ReservationsNewComponent implements OnInit {
  reservation: ReservationModel = {} as ReservationModel;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // 入力内容のバリデーション
    if (!this.reservation.startAt || !this.reservation.finishAt) {
      return;
    }

    // 予約作成リクエストを作成
    const requestBody: ReservationCreateRequest = {
      startAt: moment(this.reservation.startAt).tz('Asia/Tokyo').format(),
      finishAt: moment(this.reservation.finishAt).tz('Asia/Tokyo').format(),
    };

    this.reservationService.createReservation(requestBody).subscribe(
      (res) => {
        this.reservationService.fetchReservations();
        this.router.navigate(['/cluster', 'reservations']);
        this.alertService.openSnackBar('予約を追加しました', 'SUCCESS');
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/cluster', 'reservations']);
  }
}
