import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

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

// components
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
import { HeaderComponent } from './component/common/header/header.component';
import { UserMenuComponent } from './component/common/user-menu/user-menu.component';
import { SidenavComponent } from './component/common/sidenav/sidenav.component';
import { BreadcrumbComponent } from './component/common/breadcrumb/breadcrumb.component';
import { TitleComponent } from './component/title/title.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';

// pipes
import { UsernamePipe } from './pipe/username.pipe';

@NgModule({
  declarations: [
    UsernamePipe,
    SnackBarComponent,
    SnackBarComponent,
    HeaderComponent,
    UserMenuComponent,
    SidenavComponent,
    BreadcrumbComponent,
    TitleComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    HttpClientModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterTestingModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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

    // components
    SnackBarComponent,
    HeaderComponent,
    UserMenuComponent,
    SidenavComponent,
    BreadcrumbComponent,
    TitleComponent,
    ConfirmDialogComponent,

    // pipes
    UsernamePipe,
  ],
})
export class SharedModule {}
