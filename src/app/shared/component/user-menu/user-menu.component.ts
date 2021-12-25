import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@model/user.model';
import { AuthService } from '@shared/service/auth.service';
import { UserService } from '@shared/service/user.service';
import { AlertService } from '@shared/service/alert.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  user!: UserModel;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.userService.getLoginUser().subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }

  goMypage(): void {
    this.router.navigate(['/rdid', 'mypage']);
  }

  logout(): void {
    this.authService.logout();
    this.alertService.openSnackBar('ログアウトしました', 'SUCCESS');
  }
}
