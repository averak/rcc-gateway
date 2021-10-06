import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom modules
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './component/dashboard/dashboard.module';
import { ErrorModule } from './component/error/error.module';
import { LoginModule } from './component/login/login.module';
import { ClusterModule } from './component/cluster/cluster.module';
import { RdidModule } from './component/rdid/rdid.module';
import { IamModule } from './component/iam/iam.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // custom modules
    SharedModule,
    DashboardModule,
    ErrorModule,
    LoginModule,
    ClusterModule,
    RdidModule,
    IamModule,

    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
