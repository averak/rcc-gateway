import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { LoginRequest } from 'src/app/request/login.request';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  handleLoginTransit(requestBody: LoginRequest): void {
    this.authService.login(requestBody).subscribe(
      (accessToken) => {
        this.authService.setCredentials(accessToken);
        this.alertService.openSnackBar('ログインに成功しました', 'SUCCESS');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.authService.logout();
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }
}