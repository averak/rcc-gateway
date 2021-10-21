import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { KiriTansuComponent } from './kiri-tansu.component';
import { ItemsComponent } from './items/items.component';
import { ItemsContentComponent } from './items-content/items-content.component';

const routes: Routes = [
  {
    path: '',
    component: KiriTansuComponent,
    data: { breadcrumb: 'Kiri Tansu', title: 'Kiri Tansu' },
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      {
        path: 'items',
        component: ItemsComponent,
        data: { breadcrumb: '備品一覧', title: '備品一覧' },
        children: [
          {
            path: '',
            component: ItemsContentComponent,
            data: { breadcrumb: '' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KiriTansuRoutingModule {}
