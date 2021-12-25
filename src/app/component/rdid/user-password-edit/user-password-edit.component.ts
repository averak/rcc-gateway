import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/service/user.service';
import { AlertService } from '@shared/service/alert.service';
import { LoginUserPasswordUpdateRequest } from '@app/request/user.request';

@Component({
  selector: 'app-user-password-edit',
  templateUrl: './user-password-edit.component.html',
  styleUrls: ['./user-password-edit.component.css'],
})
export class UserPasswordEditComponent implements OnInit {
  requestBody: LoginUserPasswordUpdateRequest = {} as LoginUserPasswordUpdateRequest;

  hideCurrentPassword = true;
  hideNewPassword = true;

  constructor(private alertService: AlertService, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // 入力内容のバリデーション
    if (!this.requestBody.currentPassword || !this.requestBody.newPassword) {
      return;
    }

    this.alertService.confirmDialog(
      '作成確認',
      'この内容でパスワードを更新しますか？',
      (result: boolean): void => {
        if (result) {
          // リクエスト送信
          this.userService.updateLoginUserPassword(this.requestBody).subscribe(
            (res) => {
              this.alertService.openSnackBar('パスワードを更新しました', 'SUCCESS');
            },
            (error) => {
              this.alertService.openSnackBar(error, 'ERROR');
            }
          );
        }
      }
    );
  }

  onCancel(): void {}
}
