import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { ReservationCreateRequest } from 'src/app/request/reservation.request';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private httpBaseService: HttpBaseService) {}

  createReservation(requestBody: ReservationCreateRequest): Observable<any> {
    return this.httpBaseService.postRequest<any>(
      `${environment.API_BASE_URL}/api/reservations`,
      requestBody
    );
  }
}
