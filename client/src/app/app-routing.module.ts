import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClusterComponent } from './component/cluster/cluster.component';
import { ErrorComponent } from './component/error/error.component';

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
      { path: '', component: DashboardComponent, data: { breadcrumb: 'ダッシュボード' } },
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'ダッシュボード' } },
      { path: 'cluster', component: ClusterComponent, data: { breadcrumb: 'Cluster' } },
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
