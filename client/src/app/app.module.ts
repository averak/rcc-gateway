import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared module
import { SharedModule } from './shared/shared.module';

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

// dashboard components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductCardComponent } from './component/dashboard/product-card/product-card.component';
import { ProductVersionChipComponent } from './component/dashboard/product-version-chip/product-version-chip.component';
import { ProductListContentsComponent } from './component/dashboard/product-list-contents/product-list-contents.component';

// cluster components
import { ClusterComponent } from './component/cluster/cluster.component';
import { ReservationsCalendarComponent } from './component/cluster/reservations-calendar/reservations-calendar.component';

// login components
import { LoginComponent } from './component/login/login.component';
import { LoginFormComponent } from './component/login/login-form/login-form.component';
import { LoginCardComponent } from './component/login/login-card/login-card.component';

@NgModule({
  declarations: [
    AppComponent,

    // dashboard components
    DashboardComponent,
    ProductCardComponent,
    ProductVersionChipComponent,
    ProductListContentsComponent,

    // cluster components
    ClusterComponent,
    ReservationsCalendarComponent,

    // login components
    LoginComponent,
    LoginFormComponent,
    LoginCardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
