import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ReservationModel } from 'src/app/model/reservation.model';
import { UserModel } from 'src/app/model/user.model';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { FileDownloadService } from 'src/app/shared/service/file-download.service';

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
    private router: Router,
    private reservationService: ReservationService,
    private userService: UserService,
    private alertService: AlertService,
    private fileDownloadService: FileDownloadService
  ) {}

  ngOnInit(): void {
    // 予約一覧を取得
    this.reservationService.getReservations().subscribe(
      (reservations) => {
        this.reservations = reservations;

        // 新しい順にソート
        this.reservations.sort(
          (a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime()
        );

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
    const headers = ['氏名', 'メールアドレス', '入学年度', '予約時刻'];
    const data = this.displayedReservations.map((reservation) => {
      return [
        `${reservation.user.lastName} ${reservation.user.firstName}`,
        reservation.user.email,
        reservation.user.admissionYear,
        `${moment(reservation.startAt).format('YYYY/MM/DD HH:mm')} - ${moment(
          reservation.finishAt
        ).format('HH:mm')}`,
      ];
    });

    // CSVでエクスポート
    this.fileDownloadService.exportAsCsv('予約履歴', data, headers);
  }

  handleReservationEdit(reservation: ReservationModel): void {
    this.router.navigate(['/cluster', 'reservations', reservation.id, 'edit']);
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
