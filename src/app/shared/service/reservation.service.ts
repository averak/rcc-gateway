import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  constructor(private httpBaseService: HttpBaseService) {}

  getReservations(): Observable<ReservationModel[]> {
    return this.httpBaseService
      .getRequest<ReservationsModel>(`${environment.API_BASE_URL}/api/reservations`)
      .pipe(map((reservations) => reservations.reservations));
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
