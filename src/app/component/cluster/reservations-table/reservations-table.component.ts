import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationModel } from 'src/app/model/reservation.model';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.css'],
})
export class ReservationsTableComponent implements OnInit {
  @Input() reservations: ReservationModel[] = [];

  // columns: string[] = ['username', 'email', 'admissionYear', 'startAt', 'finishAt'];
  columns: string[] = ['username', 'email', 'admissionYear', 'reservationTime'];
  dataSource!: MatTableDataSource<ReservationModel>;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ReservationModel>(this.reservations);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.reservations !== undefined) {
      this.reservations = changes.reservations.currentValue;
      this.ngOnInit();
    }
  }
}
