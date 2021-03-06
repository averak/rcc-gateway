import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// UI modules
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// pipes
import { UsernamePipe } from '@shared/pipe/username.pipe';
import { DatetimePipe } from '@shared/pipe/datetime.pipe';

// interceptors
import { LoadingInterceptor } from '@shared/interceptor/loading.interceptor';
import { HandleErrorInterceptor } from '@shared/interceptor/handle-error.interceptor';
import { AuthorizationInterceptor } from '@shared/interceptor/authorization.interceptor';

// components
import { SnackBarComponent } from '@shared/component/snack-bar/snack-bar.component';
import { HeaderComponent } from '@shared/component/header/header.component';
import { UserMenuComponent } from '@shared/component/user-menu/user-menu.component';
import { SidenavComponent } from '@shared/component/sidenav/sidenav.component';
import { BreadcrumbComponent } from '@shared/component/breadcrumb/breadcrumb.component';
import { TitleComponent } from '@shared/component/title/title.component';
import { ConfirmDialogComponent } from '@shared/component/confirm-dialog/confirm-dialog.component';
import { ProgressSpinnerComponent } from '@shared/component/progress-spinner/progress-spinner.component';
import { MainContainerComponent } from '@shared/component/main-container/main-container.component';

@NgModule({
  declarations: [
    // pipes
    UsernamePipe,
    DatetimePipe,

    // components
    SnackBarComponent,
    SnackBarComponent,
    HeaderComponent,
    UserMenuComponent,
    SidenavComponent,
    BreadcrumbComponent,
    TitleComponent,
    ConfirmDialogComponent,
    ProgressSpinnerComponent,
    MainContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    FlexLayoutModule,
    NgbModalModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    FlexLayoutModule,
    NgbModalModule,

    // pipes
    UsernamePipe,
    DatetimePipe,
  ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ],
})
export class SharedModule {}
