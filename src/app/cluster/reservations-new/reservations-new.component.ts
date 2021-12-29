import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { AlertService } from '@shared/service/alert.service';
import { ReservationService } from '@shared/service/reservation.service';
import { ReservationModel } from '@model/reservation.model';
import { ReservationCreateRequest } from '@app/request/reservation.request';

@Component({
  selector: 'app-reservations-new',
  templateUrl: './reservations-new.component.html',
  styleUrls: ['./reservations-new.component.css'],
})
export class ReservationsNewComponent implements OnInit {
  reservation!: ReservationModel;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    // 予約時刻のデフォルト値
    this.reservation = {} as ReservationModel;
    this.reservation.startAt = new Date();
    this.reservation.finishAt = new Date();
    this.reservation.startAt.setSeconds(0);
    this.reservation.startAt.setMinutes(0);
    this.reservation.finishAt.setSeconds(0);
    this.reservation.finishAt.setMinutes(0);
    this.reservation.finishAt.setHours(this.reservation.startAt.getHours() + 3);
  }

  handleReservationSubmit(reservation: ReservationModel): void {
    // 予約作成リクエストを作成
    const requestBody: ReservationCreateRequest = {
      startAt: moment(reservation.startAt).tz('Asia/Tokyo').format(),
      finishAt: moment(reservation.finishAt).tz('Asia/Tokyo').format(),
    };

    this.alertService.confirmDialog(
      '作成確認',
      'この内容で予約を追加しますか？',
      (result: boolean): void => {
        if (result) {
          this.reservationService.createReservation(requestBody).subscribe(
            () => {
              this.router.navigate(['/cluster', 'reservations']);
              this.alertService.openSnackBar('予約を追加しました', 'SUCCESS');
            },
            (error) => {
              this.alertService.openSnackBar(error, 'ERROR');
            }
          );
        }
      }
    );
  }
}
