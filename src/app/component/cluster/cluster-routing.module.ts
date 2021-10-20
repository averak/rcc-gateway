import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ClusterComponent } from './cluster.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsContentComponent } from './reservations-content/reservations-content.component';
import { ReservationsNewComponent } from './reservations-new/reservations-new.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationsHistoriesComponent } from './reservations-histories/reservations-histories.component';

const routes: Routes = [
  {
    path: 'cluster',
    component: ClusterComponent,
    data: { breadcrumb: 'Cluster' },
    children: [
      { path: '', redirectTo: '/cluster/reservations', pathMatch: 'full' },
      {
        path: 'reservations',
        component: ReservationsComponent,
        data: { breadcrumb: '予約一覧', title: '予約一覧' },
        children: [
          {
            path: '',
            component: ReservationsContentComponent,
            data: { breadcrumb: '' },
          },
          {
            path: 'new',
            component: ReservationsNewComponent,
            data: { breadcrumb: '新規作成', title: '予約新規作成' },
          },
          {
            path: ':reservationId/edit',
            component: ReservationEditComponent,
            data: { breadcrumb: '編集', title: '予約編集' },
          },
        ],
      },
      {
        path: 'histories',
        component: ReservationsHistoriesComponent,
        data: { breadcrumb: '履歴', title: '予約履歴' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClusterRoutingModule {}
