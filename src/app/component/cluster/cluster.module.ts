import { NgModule, Injectable } from '@angular/core';

// angular calendar
import { FlatpickrModule } from 'angularx-flatpickr';
import {
  CalendarModule,
  DateAdapter,
  CalendarDateFormatter,
  CalendarNativeDateFormatter,
  DateFormatterParams,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Injectable()
class CustomDateFormatter extends CalendarNativeDateFormatter {
  public weekViewHour({ date }: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ca', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  }
}

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ClusterRoutingModule } from './cluster-routing.module';

// components
import { ClusterComponent } from './cluster.component';
import { ReservationsCalendarComponent } from './reservations-calendar/reservations-calendar.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsNewComponent } from './reservations-new/reservations-new.component';
import { ReservationsContentComponent } from './reservations-content/reservations-content.component';
import { ReservationsHistoriesComponent } from './reservations-histories/reservations-histories.component';
import { ReservationsTableComponent } from './reservations-table/reservations-table.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationInputFormComponent } from './reservation-input-form/reservation-input-form.component';

@NgModule({
  declarations: [
    // component
    ClusterComponent,
    ReservationsCalendarComponent,
    ReservationsComponent,
    ReservationsNewComponent,
    ReservationsContentComponent,
    ReservationsHistoriesComponent,
    ReservationsTableComponent,
    ReservationEditComponent,
    ReservationInputFormComponent,
  ],
  imports: [
    SharedModule,
    ClusterRoutingModule,

    // angular calendar
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: adapterFactory,
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter,
        },
      }
    ),
  ],
})
export class ClusterModule {}
