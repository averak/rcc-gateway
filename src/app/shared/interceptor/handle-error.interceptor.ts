import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@shared/service/auth.service';
import { ErrorMessageResolverService } from '@shared/service/error-message-resolver.service';

type ErrorResponse = {
  code: number;
  message: string;
};

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private errorMessageResolverService: ErrorMessageResolverService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const response = error.error as ErrorResponse;

        // 不正な認証情報
        if (error.status === 401 && response.code !== 1501) {
          this.authService.logout();
        }

        throw this.errorMessageResolverService.resolve(response.code);
      })
    );
  }
}
