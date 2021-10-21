import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { AdminGuard } from 'src/app/shared/guard/admin.guard';

// components
import { RdidComponent } from './rdid.component';
import { UsersComponent } from './users/users.component';
import { UsersContentComponent } from './users-content/users-content.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MypageContentsComponent } from './mypage-contents/mypage-contents.component';

const routes: Routes = [
  {
    path: '',
    component: RdidComponent,
    data: { breadcrumb: 'RDID', title: 'RDID' },
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users',
        component: UsersComponent,
        data: { breadcrumb: 'アカウント管理', title: 'アカウント管理' },
        children: [
          {
            path: '',
            component: UsersContentComponent,
            data: { breadcrumb: '' },
          },
          {
            path: 'new',
            component: UsersNewComponent,
            canActivate: [AdminGuard],
            data: { breadcrumb: '新規作成', title: 'ユーザ新規作成' },
          },
          {
            path: ':userId/edit',
            component: UserEditComponent,
            canActivate: [AdminGuard],
            data: { breadcrumb: 'ユーザ更新', title: 'ユーザ更新' },
          },
        ],
      },
      {
        path: 'mypage',
        component: MypageContentsComponent,
        data: { breadcrumb: '個人設定', title: '個人設定' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdidRoutingModule {}
