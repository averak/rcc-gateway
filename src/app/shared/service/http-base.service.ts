import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ErrorMessageResolverService } from './error-message-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private errorMessageResolverService: ErrorMessageResolverService
  ) {}

  getRequest<T>(url: string, catchUnauthorizedError: boolean = true) {
    return this.http.get<T>(url, this.getRequestOptions()).pipe(
      catchError((error) => {
        // 無効なJWT
        if (catchUnauthorizedError && error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  postRequest<T>(url: string, requestBody: any, catchUnauthorizedError: boolean = true) {
    return this.http.post<T>(url, requestBody, this.getRequestOptions()).pipe(
      catchError((error) => {
        // 無効なJWT
        if (catchUnauthorizedError && error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  putRequest<T>(url: string, requestBody: any, catchUnauthorizedError: boolean = true) {
    return this.http.put<T>(url, requestBody, this.getRequestOptions()).pipe(
      catchError((error) => {
        // 無効なJWT
        if (catchUnauthorizedError && error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  deleteRequest<T>(url: string, catchUnauthorizedError: boolean = true) {
    return this.http.delete<T>(url, this.getRequestOptions()).pipe(
      catchError((error) => {
        // 無効なJWT
        if (catchUnauthorizedError && error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  protected getRequestOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getCredentials(),
      }),
    };
  }
}
