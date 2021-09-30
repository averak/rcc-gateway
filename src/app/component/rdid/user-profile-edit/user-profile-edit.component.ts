import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { LoginUserUpdateRequest } from 'src/app/request/user.request';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css'],
})
export class UserProfileEditComponent implements OnInit {
  loginUser!: UserModel;
  requestBody: LoginUserUpdateRequest = {} as LoginUserUpdateRequest;

  constructor(private alertService: AlertService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getLoginUser().subscribe(
      (user) => {
        this.loginUser = user;
        this.requestBody = this.loginUser as LoginUserUpdateRequest;
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }

  onSubmit(): void {
    // 入力内容のバリデーション
    if (!this.requestBody.firstName || !this.requestBody.lastName || !this.requestBody.email) {
      return;
    }

    this.alertService.confirmDialog(
      '作成確認',
      'この内容でプロフィールを更新しますか？',
      (result: boolean): void => {
        if (result) {
          // リクエスト送信
          this.userService.updateLoginUser(this.requestBody).subscribe(
            (res) => {
              this.alertService.openSnackBar('プロフィールを更新しました', 'SUCCESS');
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
