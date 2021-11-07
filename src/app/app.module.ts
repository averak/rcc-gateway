import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './component/error/error.module';
import { LoginModule } from './component/login/login.module';
import { DashboardModule } from './component/dashboard/dashboard.module';
import { ButlerModule } from './component/butler/butler.module';
import { ClusterModule } from './component/cluster/cluster.module';
import { IamModule } from './component/iam/iam.module';
import { KiriTansuModule } from './component/kiri-tansu/kiri-tansu.module';
import { RdidModule } from './component/rdid/rdid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ErrorModule,
    LoginModule,
    DashboardModule,
    ButlerModule,
    ClusterModule,
    IamModule,
    KiriTansuModule,
    RdidModule,
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
