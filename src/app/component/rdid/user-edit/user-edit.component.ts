import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel, admissionYears } from 'src/app/model/user.model';
import { UserUpdateRequest } from 'src/app/request/user.request';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  user!: UserModel;
  requestBody: UserUpdateRequest = {} as UserUpdateRequest;
  admissionYears = admissionYears;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // ユーザID
    const userId = Number(this.route.snapshot.paramMap.get('userId'));

    // 編集対象ユーザを取得
    this.userService.selectById(userId).subscribe((user) => {
      if (user) {
        this.user = user;
        this.requestBody = this.user as UserUpdateRequest;
      } else {
        this.router.navigate(['/rdid', 'users']);
        this.alertService.openSnackBar('編集対象ユーザが見つかりません', 'ERROR');
      }
    });
  }

  onSubmit(): void {
    // 入力内容のバリデーション
    if (
      !this.requestBody.firstName ||
      !this.requestBody.lastName ||
      !this.requestBody.email ||
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
          this.userService.updateUser(this.user.id, this.requestBody).subscribe(
            (res) => {
              this.router.navigate(['/rdid', 'users']);
              this.alertService.openSnackBar('ユーザを更新しました', 'SUCCESS');
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
