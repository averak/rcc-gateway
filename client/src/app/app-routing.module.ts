import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClusterComponent } from './component/cluster/cluster.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cluster', component: ClusterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
