import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { ReservationModel } from 'src/app/model/reservation.model';
import { UserModel } from 'src/app/model/user.model';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ReservationUpdateRequest } from 'src/app/request/reservation.request';

@Component({
  selector: 'app-reservations-content',
  templateUrl: './reservations-content.component.html',
  styleUrls: ['./reservations-content.component.css'],
})
export class ReservationsContentComponent implements OnInit {
  reservations!: ReservationModel[];
  loginUser!: UserModel;

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // 予約一覧を取得
    this.reservationService.getReservations().subscribe(
      (reservations) => {
        this.reservations = reservations;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );

    // ログインユーザを取得
    this.userService.getLoginUser().subscribe(
      (user: UserModel) => {
        this.loginUser = user;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }

  handleReservationNew(): void {
    this.router.navigate(['cluster', 'reservations', 'new']);
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
          this.reservationService.updateReservation(reservation.id, requestBody).subscribe(
            () => {
              this.reservationService.fetchReservations();
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

  handleReservationDelete(reservation: ReservationModel): void {
    this.alertService.confirmDialog(
      '削除確認',
      '本当に予約を削除しますか？',
      (result: boolean): void => {
        if (result) {
          this.reservationService.deleteReservation(reservation.id).subscribe(
            () => {
              this.reservationService.fetchReservations();
              this.alertService.openSnackBar('予約を削除しました', 'SUCCESS');
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
