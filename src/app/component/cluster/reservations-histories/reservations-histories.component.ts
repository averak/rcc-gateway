import { Component, OnInit } from '@angular/core';
import { ReservationModel } from 'src/app/model/reservation.model';
import { UserModel } from 'src/app/model/user.model';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-reservations-histories',
  templateUrl: './reservations-histories.component.html',
  styleUrls: ['./reservations-histories.component.css'],
})
export class ReservationsHistoriesComponent implements OnInit {
  loginUser!: UserModel;
  reservations!: ReservationModel[];
  displayedReservations!: ReservationModel[];

  constructor(
    private reservationService: ReservationService,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // 予約一覧を取得
    this.reservationService.getReservations().subscribe(
      (reservations) => {
        this.reservations = reservations;
        this.displayedReservations = this.reservations;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );

    // ログインユーザを取得
    this.userService.getLoginUser().subscribe(
      (user) => {
        this.loginUser = user;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
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

  onClickExport(): void {
    // FIXME
    console.log('エクスポートします');
  }

  onToggleClick(value: string): void {
    // 全員
    if (value === 'everyone') {
      this.displayedReservations = this.reservations;
    }

    // 自分のみ
    if (value === 'myself') {
      this.displayedReservations = this.reservations.filter(
        (reservation) => reservation.user.id === this.loginUser.id
      );
    }
  }
}
