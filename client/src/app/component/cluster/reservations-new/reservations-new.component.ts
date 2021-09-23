import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationCreateRequest } from 'src/app/request/reservation.request';

@Component({
  selector: 'app-reservations-new',
  templateUrl: './reservations-new.component.html',
  styleUrls: ['./reservations-new.component.css'],
})
export class ReservationsNewComponent implements OnInit {
  requestBody: ReservationCreateRequest = {} as ReservationCreateRequest;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {}

  onCancel(): void {
    this.router.navigate(['cluster', 'reservations']);
  }
}
