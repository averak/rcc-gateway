import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { UserModel } from 'src/app/model/user.model';
import { UserRoleEnum } from 'src/app/enums/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel);

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
}
