import { Component, OnInit } from '@angular/core';
import { ReservationModel } from 'src/app/model/reservation.model';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-reservations-histories',
  templateUrl: './reservations-histories.component.html',
  styleUrls: ['./reservations-histories.component.css'],
})
export class ReservationsHistoriesComponent implements OnInit {
  reservations!: ReservationModel[];

  constructor(private reservationService: ReservationService, private alertService: AlertService) {}

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
  }

  onClickExport(): void {
    // FIXME
    console.log('エクスポートします');
  }
}
