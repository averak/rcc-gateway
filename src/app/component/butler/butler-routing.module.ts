import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ButlerComponent } from './butler.component';

const routes: Routes = [
  {
    path: '',
    component: ButlerComponent,
    data: { breadcrumb: 'Butler', title: 'Butler' },
    children: [
      { path: '', redirectTo: 'purchase_requests', pathMatch: 'full' },
      {
        path: 'purchase_requests',
        component: ButlerComponent,
        data: { breadcrumb: '購入申請', title: '購入申請' },
      },
      {
        path: 'payback_requests',
        component: ButlerComponent,
        data: { breadcrumb: '返金依頼', title: '返金依頼' },
      },
      {
        path: 'manage',
        component: ButlerComponent,
        data: { breadcrumb: '申請管理', title: '申請管理' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButlerRoutingModule {}
