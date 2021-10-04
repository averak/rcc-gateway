import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReservationModel, ReservationsModel } from 'src/app/model/reservation.model';
import {
  ReservationCreateRequest,
  ReservationUpdateRequest,
} from 'src/app/request/reservation.request';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  getReservations(): Observable<ReservationModel[]> {
    return this.http
      .get<ReservationsModel>(`${environment.API_BASE_URL}/api/reservations`)
      .pipe(map((reservations) => reservations.reservations));
  }

  createReservation(requestBody: ReservationCreateRequest): Observable<any> {
    return this.http.post<any>(`${environment.API_BASE_URL}/api/reservations`, requestBody);
  }

  updateReservation(reservationId: number, requestBody: ReservationUpdateRequest): Observable<any> {
    return this.http.put<any>(
      `${environment.API_BASE_URL}/api/reservations/${reservationId}`,
      requestBody
    );
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete<any>(`${environment.API_BASE_URL}/api/reservations/${reservationId}`);
  }

  selectById(reservationId: number): Observable<ReservationModel | undefined> {
    return this.getReservations().pipe(
      map((reservations) => reservations.find((reservation) => reservation.id === reservationId))
    );
  }
}
