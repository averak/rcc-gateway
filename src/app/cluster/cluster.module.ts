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
import { SharedModule } from '@shared/shared.module';

// components
import { ClusterComponent } from '@cluster/cluster.component';
import { ReservationsCalendarComponent } from '@cluster/reservations-calendar/reservations-calendar.component';
import { ReservationsComponent } from '@cluster/reservations/reservations.component';
import { ReservationsNewComponent } from '@cluster/reservations-new/reservations-new.component';
import { ReservationsContentComponent } from '@cluster/reservations-content/reservations-content.component';
import { ReservationsHistoriesComponent } from '@cluster/reservations-histories/reservations-histories.component';
import { ReservationsTableComponent } from '@cluster/reservations-table/reservations-table.component';
import { ReservationEditComponent } from '@cluster/reservation-edit/reservation-edit.component';
import { ReservationInputFormComponent } from '@cluster/reservation-input-form/reservation-input-form.component';

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
