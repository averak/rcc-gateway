import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContentComponent } from './shared/component/main-content/main-content.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

// guards
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

// modules
import { ClusterModule } from './component/cluster/cluster.module';
import { RdidModule } from './component/rdid/rdid.module';
import { IamModule } from './component/iam/iam.module';
import { KiriTansuModule } from './component/kiri-tansu/kiri-tansu.module';
import { LoginModule } from './component/login/login.module';
import { ErrorModule } from './component/error/error.module';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'ダッシュボード', title: 'ダッシュボード' },
      },
      {
        path: 'cluster',
        loadChildren: () => ClusterModule,
      },
      {
        path: 'rdid',
        loadChildren: () => RdidModule,
      },
      {
        path: 'iam',
        loadChildren: () => IamModule,
      },
      {
        path: 'kiri-tansu',
        loadChildren: () => KiriTansuModule,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: 'error',
    loadChildren: () => ErrorModule,
  },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const AppRoutes = routes;
