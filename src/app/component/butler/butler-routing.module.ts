import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ButlerComponent } from '@butler/butler.component';
import { PurchaseOrdersContentsComponent } from '@butler/purchase-orders-contents/purchase-orders-contents.component';

const routes: Routes = [
  {
    path: '',
    component: ButlerComponent,
    data: { breadcrumb: 'Butler', title: 'Butler' },
    children: [
      { path: '', redirectTo: 'purchase-orders', pathMatch: 'full' },
      {
        path: 'purchase-orders',
        component: PurchaseOrdersContentsComponent,
        data: { breadcrumb: '購入申請', title: '購入申請' },
      },
      {
        path: 'payback-orders',
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
