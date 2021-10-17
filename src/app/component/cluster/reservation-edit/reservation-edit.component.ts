import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment-timezone';
import { ReservationModel } from 'src/app/model/reservation.model';
import { ReservationUpdateRequest } from 'src/app/request/reservation.request';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css'],
})
export class ReservationEditComponent implements OnInit {
  reservation!: ReservationModel;

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 予約ID
    const reservationId = Number(this.route.snapshot.paramMap.get('reservationId'));

    // 編集対象予約を取得
    this.reservationService.selectById(reservationId).subscribe((reservation) => {
      if (reservation) {
        this.reservation = reservation;
        this.reservation.startAt = new Date(reservation.startAt);
        this.reservation.finishAt = new Date(reservation.finishAt);
      } else {
        this.onCancel();
        this.alertService.openSnackBar('編集対象予約が見つかりません', 'ERROR');
      }
    });
  }

  handleReservationEdit(reservation: ReservationModel): void {
    // 予約更新リクエストを作成
    const requestBody: ReservationUpdateRequest = {
      startAt: moment(reservation.startAt).tz('Asia/Tokyo').format(),
      finishAt: moment(reservation.finishAt).tz('Asia/Tokyo').format(),
    };

    this.alertService.confirmDialog(
      '編集確認',
      '本当に予約を編集しますか？',
      (result: boolean): void => {
        if (result) {
          this.reservationService.updateReservation(this.reservation.id, requestBody).subscribe(
            () => {
              this.onCancel();
              this.alertService.openSnackBar('予約を編集しました', 'SUCCESS');
            },
            (error) => {
              this.alertService.openSnackBar(error, 'ERROR');
            }
          );
        }
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/cluster', 'reservations']);
  }
}
