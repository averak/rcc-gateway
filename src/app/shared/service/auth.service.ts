import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorMessageResolverService } from 'src/app/shared/service/error-message-resolver.service';
import { LoginRequest } from 'src/app/request/login.request';
import { AccessTokenModel } from 'src/app/model/access-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private errorMessageResolverService: ErrorMessageResolverService
  ) {}

  public login(requestBody: LoginRequest): Observable<AccessTokenModel> {
    // request options
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<AccessTokenModel>(
      `${environment.API_BASE_URL}/api/login`,
      requestBody,
      options
    );
  }

  public logout(): void {
    this.cookieService.delete(environment.CREDENTIALS_KEY);
    this.router.navigate(['/login']);
  }

  public getCredentials(): string {
    return this.cookieService.get(environment.CREDENTIALS_KEY);
  }

  public setCredentials(accessToken: AccessTokenModel): void {
    this.cookieService.set(
      environment.CREDENTIALS_KEY,
      `${accessToken.tokenType} ${accessToken.accessToken}`
    );
  }

  public checkAuthenticated(): boolean {
    return this.cookieService.check(environment.CREDENTIALS_KEY);
  }
}
