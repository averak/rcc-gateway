import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContainerComponent } from '@shared/component/main-container/main-container.component';

// guards
import { AuthGuard } from '@shared/guard/auth.guard';

// modules

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('@dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'butler',
        loadChildren: () => import('@butler/butler.module').then((m) => m.ButlerModule),
      },
      {
        path: 'cluster',
        loadChildren: () => import('@cluster/cluster.module').then((m) => m.ClusterModule),
      },
      {
        path: 'iam',
        loadChildren: () => import('@iam/iam.module').then((m) => m.IamModule),
      },
      {
        path: 'kiri-tansu',
        loadChildren: () => import('@kiri-tansu/kiri-tansu.module').then((m) => m.KiriTansuModule),
      },
      {
        path: 'rdid',
        loadChildren: () => import('@rdid/rdid.module').then((m) => m.RdidModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('@login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'error',
    loadChildren: () => import('@error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const AppRoutes = routes;
