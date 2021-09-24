import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { ReservationModel, ReservationsModel } from 'src/app/model/reservation.model';
import {
  ReservationCreateRequest,
  ReservationUpdateRequest,
} from 'src/app/request/reservation.request';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservations: BehaviorSubject<ReservationModel[]> = new BehaviorSubject<ReservationModel[]>([]);

  constructor(private httpBaseService: HttpBaseService) {}

  getReservations(): Observable<ReservationModel[]> {
    if (Object.keys(this.reservations.getValue()).length === 0) {
      this.fetchReservations();
    }

    return this.reservations;
  }

  fetchReservations(): void {
    this.httpBaseService
      .getRequest<ReservationsModel>(`${environment.API_BASE_URL}/api/reservations`)
      .subscribe(
        (reservations: ReservationsModel) => {
          this.reservations.next(reservations.reservations);
        },
        (error) => this.reservations.error(error)
      );
  }

  createReservation(requestBody: ReservationCreateRequest): Observable<any> {
    return this.httpBaseService.postRequest<any>(
      `${environment.API_BASE_URL}/api/reservations`,
      requestBody
    );
  }

  updateReservation(reservationId: number, requestBody: ReservationUpdateRequest): Observable<any> {
    return this.httpBaseService.putRequest<any>(
      `${environment.API_BASE_URL}/api/reservations/${reservationId}`,
      requestBody
    );
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.httpBaseService.deleteRequest<any>(
      `${environment.API_BASE_URL}/api/reservations/${reservationId}`
    );
  }
}
