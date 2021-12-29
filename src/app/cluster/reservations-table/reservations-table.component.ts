import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationModel } from '@model/reservation.model';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.css'],
})
export class ReservationsTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() reservations: ReservationModel[] = [];

  @Output() reservationEdit = new EventEmitter<ReservationModel>();
  @Output() reservationDelete = new EventEmitter<ReservationModel>();

  columns: string[] = ['username', 'email', 'admissionYear', 'reservationTime', 'control'];
  dataSource!: MatTableDataSource<ReservationModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ReservationModel>(this.reservations);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.reservations !== undefined) {
      this.reservations = changes.reservations.currentValue;
      this.ngOnInit();
    }
  }

  onClickEdit(reservation: ReservationModel): void {
    this.reservationEdit.emit(reservation);
  }

  onClickDelete(reservation: ReservationModel): void {
    this.reservationDelete.emit(reservation);
  }
}
