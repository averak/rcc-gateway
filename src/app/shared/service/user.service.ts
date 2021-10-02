import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserModel, UsersModel } from 'src/app/model/user.model';
import { UserRoleEnum } from 'src/app/enums/user-role.enum';
import {
  UserCreateRequest,
  UserUpdateRequest,
  LoginUserUpdateRequest,
  LoginUserPasswordUpdateRequest,
} from 'src/app/request/user.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkAdmin(user: UserModel): boolean {
    return user.roleId == UserRoleEnum.ADMIN;
  }

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
    return this.http.get<UserModel>(`${environment.API_BASE_URL}/api/users/me`);
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
