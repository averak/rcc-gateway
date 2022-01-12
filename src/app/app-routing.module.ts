import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContainerComponent } from '@shared/component/main-container/main-container.component';

// guards
import { AuthGuard } from '@shared/guard/auth.guard';

// modules
import { ErrorRoutingModule } from '@error/error-routing.module';
import { LoginRoutingModule } from '@login/login-routing.module';
import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { ClusterRoutingModule } from '@cluster/cluster-routing.module';
import { IamRoutingModule } from '@iam/iam-routing.module';
import { KiriTansuRoutingModule } from '@kiri-tansu/kiri-tansu-routing.module';
import { RdidRoutingModule } from '@rdid/rdid-routing.module';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => DashboardRoutingModule,
      },
      {
        path: 'butler',
        loadChildren: () => import('@butler/butler.module').then((m) => m.ButlerModule),
      },
      {
        path: 'cluster',
        loadChildren: () => ClusterRoutingModule,
      },
      {
        path: 'iam',
        loadChildren: () => IamRoutingModule,
      },
      {
        path: 'kiri-tansu',
        loadChildren: () => KiriTansuRoutingModule,
      },
      {
        path: 'rdid',
        loadChildren: () => RdidRoutingModule,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => LoginRoutingModule,
  },
  {
    path: 'error',
    loadChildren: () => ErrorRoutingModule,
  },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const AppRoutes = routes;
