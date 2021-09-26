import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClusterComponent } from './component/cluster/cluster.component';
import { ReservationsComponent } from './component/cluster/reservations/reservations.component';
import { ReservationsContentComponent } from './component/cluster/reservations-content/reservations-content.component';
import { ReservationsNewComponent } from './component/cluster/reservations-new/reservations-new.component';
import { ReservationsHistoriesComponent } from './component/cluster/reservations-histories/reservations-histories.component';
import { RdidComponent } from './component/rdid/rdid.component';
import { UsersComponent } from './component/rdid/users/users.component';
import { UsersContentComponent } from './component/rdid/users-content/users-content.component';

// guards
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { LoginedGuard } from 'src/app/shared/guard/logined.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginedGuard],
    data: { breadcrumb: 'ログイン' },
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { breadcrumb: 'ダッシュボード', title: 'ダッシュボード' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'ダッシュボード', title: 'ダッシュボード' },
      },
      {
        path: 'cluster',
        component: ClusterComponent,
        data: { breadcrumb: 'Cluster' },
        children: [
          { path: '', redirectTo: '/cluster/reservations', pathMatch: 'full' },
          {
            path: 'reservations',
            component: ReservationsComponent,
            data: { breadcrumb: '予約一覧', title: '予約一覧' },
            children: [
              {
                path: '',
                component: ReservationsContentComponent,
                data: { breadcrumb: '' },
              },
              {
                path: 'new',
                component: ReservationsNewComponent,
                data: { breadcrumb: '新規作成', title: '予約新規作成' },
              },
              {
                path: 'histories',
                component: ReservationsHistoriesComponent,
                data: { breadcrumb: '履歴', title: '予約履歴' },
              },
            ],
          },
        ],
      },
      {
        path: 'rdid',
        component: RdidComponent,
        data: { breadcrumb: 'RDID', title: 'RDID' },
        children: [
          { path: '', redirectTo: '/rdid/users', pathMatch: 'full' },
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
            ],
          },
        ],
      },
    ],
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
