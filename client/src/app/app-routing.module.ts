import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClusterComponent } from './component/cluster/cluster.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'ログイン' } },
  { path: '', component: DashboardComponent, data: { breadcrumb: 'ダッシュボード' } },
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'ダッシュボード' } },
  { path: 'cluster', component: ClusterComponent, data: { breadcrumb: 'Cluster' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
