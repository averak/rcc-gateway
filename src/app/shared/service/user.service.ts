import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserModel, UsersModel } from '@model/user.model';
import { UserRoleEnum } from '@app/enums/user-role.enum';
import {
  UserCreateRequest,
  UserUpdateRequest,
  LoginUserUpdateRequest,
  LoginUserPasswordUpdateRequest,
} from '@app/request/user.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // adminチェックのため
  private loginUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http
      .get<UsersModel>(`${environment.API_BASE_URL}/api/users`)
      .pipe(map((users) => users.users));
  }

  createUser(requestBody: UserCreateRequest) {
    return this.http.post<any>(`${environment.API_BASE_URL}/api/users`, requestBody);
  }

  updateUser(userId: number, requestBody: UserUpdateRequest): Observable<any> {
    return this.http.put<any>(`${environment.API_BASE_URL}/api/users/${userId}`, requestBody);
  }

  getLoginUser(): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${environment.API_BASE_URL}/api/users/me`)
      .pipe(tap((user) => this.loginUser.next(user)));
  }

  updateLoginUser(requestBody: LoginUserUpdateRequest): Observable<any> {
    return this.http.put<any>(`${environment.API_BASE_URL}/api/users/me`, requestBody);
  }

  updateLoginUserPassword(requestBody: LoginUserPasswordUpdateRequest): Observable<any> {
    return this.http.put<any>(`${environment.API_BASE_URL}/api/users/me/password`, requestBody);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<UserModel>(`${environment.API_BASE_URL}/api/users/${userId}`);
  }

  selectById(userId: number): Observable<UserModel | undefined> {
    return this.getUsers().pipe(map((users) => users.find((user) => user.id === userId)));
  }

  sortUsers(users: UserModel[]): UserModel[] {
    // 入学年度/IDでソート
    users.sort((a, b) => {
      if (a.admissionYear < b.admissionYear) return 1;
      if (a.admissionYear > b.admissionYear) return -1;
      return a.lastName.localeCompare(b.lastName, 'ja');
    });
    return users;
  }

  checkAdmin(user: UserModel): boolean {
    return user.roleId == UserRoleEnum.ADMIN;
  }

  isLoginUserAdmin(): Observable<boolean> {
    return this.loginUser.pipe(map((user) => this.checkAdmin(user)));
  }
}
