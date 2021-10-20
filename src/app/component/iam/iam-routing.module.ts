import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { IamComponent } from './iam.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { UserGroupsContentComponent } from './user-groups-content/user-groups-content.component';
import { RoleQuotasComponent } from './role-quotas/role-quotas.component';

const routes: Routes = [
  {
    path: 'iam',
    component: IamComponent,
    data: { breadcrumb: 'IAM', title: 'IAM' },
    children: [
      { path: '', redirectTo: '/iam/user-groups', pathMatch: 'full' },
      {
        path: 'user-groups',
        component: UserGroupsComponent,
        data: { breadcrumb: 'ユーザグループ', title: 'ユーザグループ' },
        children: [
          {
            path: '',
            component: UserGroupsContentComponent,
            data: { breadcrumb: '' },
          },
        ],
      },
      {
        path: 'quotas',
        component: RoleQuotasComponent,
        data: { breadcrumb: '権限設定', title: '権限設定' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IamRoutingModule {}
