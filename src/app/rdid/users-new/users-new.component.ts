import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admissionYears } from '@model/user.model';
import { UserService } from '@shared/service/user.service';
import { AlertService } from '@shared/service/alert.service';
import { UserCreateRequest } from '@app/request/user.request';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css'],
})
export class UsersNewComponent implements OnInit {
  requestBody: UserCreateRequest = {} as UserCreateRequest;
  admissionYears = admissionYears;
  hidePassword: boolean = true;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // 入力内容のバリデーション
    if (
      !this.requestBody.firstName ||
      !this.requestBody.lastName ||
      !this.requestBody.email ||
      !this.requestBody.password ||
      !this.requestBody.roleId ||
      !this.requestBody.admissionYear
    ) {
      return;
    }

    this.alertService.confirmDialog(
      '作成確認',
      'この内容でユーザを作成しますか？',
      (result: boolean): void => {
        if (result) {
          // リクエスト送信
          this.userService.createUser(this.requestBody).subscribe(
            (res) => {
              this.router.navigate(['/rdid', 'users']);
              this.alertService.openSnackBar('ユーザを新規作成しました', 'SUCCESS');
            },
            (error) => {
              this.alertService.openSnackBar(error, 'ERROR');
            }
          );
        }
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/rdid', 'users']);
  }
}
