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
  reservation: any = {} as ReservationModel;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    // 予約時刻のデフォルト値
    const now = new Date();
    now.setMinutes(0);
    this.reservation.startAt = moment(now).tz('Asia/Tokyo').format().slice(0, 16);
    this.reservation.finishAt = moment(now).tz('Asia/Tokyo').format().slice(0, 16);
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
