import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { UserModel, UsersModel } from 'src/app/model/user.model';
import { UserRoleEnum } from 'src/app/enums/user-role.enum';
import {
  UserCreateRequest,
  UserUpdateRequest,
  LoginUserPasswordUpdateRequest,
} from 'src/app/request/user.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel);
  users: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);

  constructor(private httpBaseService: HttpBaseService) {}

  getLoginUser(): Observable<UserModel> {
    if (Object.keys(this.loginUser.getValue()).length === 0) {
      this.fetchLoginUser();
    }

    return this.loginUser;
  }

  fetchLoginUser(): void {
    this.httpBaseService
      .getRequest<UserModel>(`${environment.API_BASE_URL}/api/users/me`)
      .subscribe(
        (user: UserModel) => {
          this.loginUser.next(user);
        },
        (error) => this.loginUser.error(error)
      );
  }

  checkAdmin(user: UserModel): boolean {
    return user.roleId == UserRoleEnum.ADMIN;
  }

  getUsers(): Observable<UserModel[]> {
    if (Object.keys(this.users.getValue()).length === 0) {
      this.fetchUsers();
    }

    return this.users;
  }

  fetchUsers(): void {
    this.httpBaseService.getRequest<any>(`${environment.API_BASE_URL}/api/users`).subscribe(
      (users: UsersModel) => {
        this.users.next(users.users);
      },
      (error) => this.loginUser.error(error)
    );
  }

  selectById(userId: number): UserModel | undefined {
    return this.users.getValue().find((user) => user.id == userId);
  }

  createUser(requestBody: UserCreateRequest) {
    return this.httpBaseService.postRequest<any>(
      `${environment.API_BASE_URL}/api/users`,
      requestBody
    );
  }

  updateUser(userId: number, requestBody: UserUpdateRequest): Observable<any> {
    return this.httpBaseService.putRequest<any>(
      `${environment.API_BASE_URL}/api/users/${userId}`,
      requestBody
    );
  }

  updateLoginUserPassword(requestBody: LoginUserPasswordUpdateRequest): Observable<any> {
    return this.httpBaseService.putRequest<any>(
      `${environment.API_BASE_URL}/api/users/me/password`,
      requestBody
    );
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpBaseService.deleteRequest<UserModel>(
      `${environment.API_BASE_URL}/api/users/${userId}`
    );
  }

  sortUsers(users: UserModel[]): UserModel[] {
    // 入学年度/IDでソート
    users.sort((a, b) => {
      if (a.admissionYear > b.admissionYear) return 1;
      if (a.admissionYear < b.admissionYear) return -1;
      return a.lastName.localeCompare(b.lastName, 'ja');
    });
    return users;
  }
}
