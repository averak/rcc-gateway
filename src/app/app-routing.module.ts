import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContentComponent } from './shared/component/main-content/main-content.component';

// guards
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

// modules
import { ErrorModule } from './component/error/error.module';
import { DashboardModule } from './component/dashboard/dashboard.module';
import { ClusterModule } from './component/cluster/cluster.module';
import { RdidModule } from './component/rdid/rdid.module';
import { IamModule } from './component/iam/iam.module';
import { KiriTansuModule } from './component/kiri-tansu/kiri-tansu.module';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => DashboardModule,
      },
      {
        path: '',
        loadChildren: () => ClusterModule,
      },
      {
        path: '',
        loadChildren: () => RdidModule,
      },
      {
        path: '',
        loadChildren: () => IamModule,
      },
      {
        path: '',
        loadChildren: () => KiriTansuModule,
      },
    ],
  },
  {
    path: '',
    loadChildren: () => ErrorModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
