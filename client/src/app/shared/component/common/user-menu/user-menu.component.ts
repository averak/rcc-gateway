import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AlertService } from 'src/app/shared/service/alert.service';

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
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.user = {
      firstName: '健太朗',
      lastName: '阿部',
    };
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.alertService.openSnackBar('ログアウトしました', 'SUCCESS');
  }
}