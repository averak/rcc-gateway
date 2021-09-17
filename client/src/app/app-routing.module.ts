import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { DashboardComponent } from './components/page/dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
