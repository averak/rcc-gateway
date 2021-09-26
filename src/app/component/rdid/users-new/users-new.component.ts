import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { UserCreateRequest } from 'src/app/request/user.request';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css'],
})
export class UsersNewComponent implements OnInit {
  requestBody: UserCreateRequest = {} as UserCreateRequest;
  admissionYears: number[] = [];
  hidePassword: boolean = true;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.admissionYears = this.getAdmissionYears();
  }

  getAdmissionYears(): number[] {
    const currentYear: number = new Date().getFullYear();
    return [...Array(8)].map((_: undefined, idx: number) => idx + currentYear - 7);
  }

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
              this.userService.fetchUsers();
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
