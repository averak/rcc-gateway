import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ErrorMessageResolverService } from './error-message-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private errorMessageResolverService: ErrorMessageResolverService
  ) {}

  getRequest<T>(url: string, redirectErrorPage: boolean = false) {
    return this.http.get<T>(url, this.getRequestOptions()).pipe(
      catchError((error) => {
        const errorCodes: number[] = Object.keys(this.errorMessageResolverService.messages).map(
          Number
        );

        // エラーページ
        if (redirectErrorPage && errorCodes.indexOf(error.status) >= 0) {
          this.router.navigate(['/error'], { queryParams: { status_code: error.status } });
        }

        // 無効なJWT
        if (error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  postRequest<T>(url: string, requestBody: any, redirectErrorPage: boolean = false) {
    return this.http.post<T>(url, requestBody, this.getRequestOptions()).pipe(
      catchError((error) => {
        const errorCodes: number[] = Object.keys(this.errorMessageResolverService.messages).map(
          Number
        );

        // エラーページ
        if (redirectErrorPage && errorCodes.indexOf(error.status) >= 0) {
          this.router.navigate(['/error'], { queryParams: { status_code: error.status } });
        }

        // 無効なJWT
        if (error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  putRequest<T>(url: string, requestBody: any, redirectErrorPage: boolean = false) {
    return this.http.put<T>(url, requestBody, this.getRequestOptions()).pipe(
      catchError((error) => {
        const errorCodes: number[] = Object.keys(this.errorMessageResolverService.messages).map(
          Number
        );

        // エラーページ
        if (redirectErrorPage && errorCodes.indexOf(error.status) >= 0) {
          this.router.navigate(['/error'], { queryParams: { status_code: error.status } });
        }

        // 無効なJWT
        if (error.status == 401) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(error.error.code);
      })
    );
  }

  deleteRequest<T>(url: string, redirectErrorPage: boolean = false) {
    return this.http.delete<T>(url, this.getRequestOptions()).pipe(
      catchError((error) => {
        const errorCodes: number[] = Object.keys(this.errorMessageResolverService.messages).map(
          Number
        );

        // エラーページ
        if (redirectErrorPage && errorCodes.indexOf(error.status) >= 0) {
          this.router.navigate(['/error'], { queryParams: { status_code: error.status } });
        }

        // 無効なJWT
        if (error.status == 401) {
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
