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
  requestBody = {} as LoginRequest;
  hidePassword: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // 入力内容のバリデーション
    if (!this.requestBody.email || !this.requestBody.password) {
      return;
    }

    this.authService.login(this.requestBody).subscribe(
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
