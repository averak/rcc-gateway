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

// login components
import { LoginComponent } from './component/login/login.component';
import { LoginFormComponent } from './component/login/login-form/login-form.component';
import { LoginCardComponent } from './component/login/login-card/login-card.component';

// error components
import { ErrorComponent } from './component/error/error.component';

// dashboard components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductCardComponent } from './component/dashboard/product-card/product-card.component';
import { ProductVersionChipComponent } from './component/dashboard/product-version-chip/product-version-chip.component';
import { ProductListContentsComponent } from './component/dashboard/product-list-contents/product-list-contents.component';

// cluster components
import { ClusterComponent } from './component/cluster/cluster.component';
import { ReservationsCalendarComponent } from './component/cluster/reservations-calendar/reservations-calendar.component';
import { ReservationsComponent } from './component/cluster/reservations/reservations.component';
import { ReservationsNewComponent } from './component/cluster/reservations-new/reservations-new.component';
import { ReservationsContentComponent } from './component/cluster/reservations-content/reservations-content.component';
import { ReservationsHistoriesComponent } from './component/cluster/reservations-histories/reservations-histories.component';
import { ReservationsTableComponent } from './component/cluster/reservations-table/reservations-table.component';

// RDID components
import { RdidComponent } from './component/rdid/rdid.component';
import { UsersComponent } from './component/rdid/users/users.component';
import { UsersContentComponent } from './component/rdid/users-content/users-content.component';
import { UsersTableComponent } from './component/rdid/users-table/users-table.component';
import { UsersNewComponent } from './component/rdid/users-new/users-new.component';
import { MypageContentsComponent } from './component/rdid/mypage-contents/mypage-contents.component';
import { UserProfileEditComponent } from './component/rdid/user-profile-edit/user-profile-edit.component';
import { UserPasswordEditComponent } from './component/rdid/user-password-edit/user-password-edit.component';
import { UserEditComponent } from './component/rdid/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,

    // login components
    LoginComponent,
    LoginFormComponent,
    LoginCardComponent,

    // error components
    ErrorComponent,

    // dashboard components
    DashboardComponent,
    ProductCardComponent,
    ProductVersionChipComponent,
    ProductListContentsComponent,

    // cluster components
    ClusterComponent,
    ReservationsCalendarComponent,
    ReservationsComponent,
    ReservationsNewComponent,
    ReservationsContentComponent,
    ReservationsHistoriesComponent,
    ReservationsTableComponent,

    // RDID components
    RdidComponent,
    UsersComponent,
    UsersContentComponent,
    UsersTableComponent,
    UsersNewComponent,
    MypageContentsComponent,
    UserProfileEditComponent,
    UserPasswordEditComponent,
    UserEditComponent,
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
