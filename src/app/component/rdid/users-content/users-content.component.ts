import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css'],
})
export class UsersContentComponent implements OnInit {
  users!: UserModel[];

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // ユーザ一覧を取得
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.users = this.userService.sortUsers(this.users);
      },
      (error) => {
        this.alertService.openSnackBar(error, 'ERROR');
      }
    );
  }

  onClickNew(): void {
    this.router.navigate(['rdid', 'users', 'new']);
  }

  handleUserEdit(user: UserModel): void {
    this.router.navigate(['/rdid', 'users', user.id, 'edit']);
  }

  handleUserDelete(user: UserModel): void {
    this.alertService.confirmDialog(
      '削除確認',
      'この動作は取り消せませんが、本当に削除しますか？',
      (result: boolean): void => {
        if (result) {
          this.userService.deleteUser(user.id).subscribe(
            () => {
              this.getUsers();
              this.alertService.openSnackBar('ユーザを削除しました', 'SUCCESS');
            },
            (error) => {
              this.alertService.openSnackBar(error, 'ERROR');
            }
          );
        }
      }
    );
  }
}
