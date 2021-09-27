import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  user!: UserModel;

  constructor(
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

  logout(): void {
    this.authService.logout();
    this.alertService.openSnackBar('ログアウトしました', 'SUCCESS');
  }
}
