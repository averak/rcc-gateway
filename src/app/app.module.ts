import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from '@app/app.component';

// modules
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ErrorModule } from '@error/error.module';
import { LoginModule } from '@login/login.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { ClusterModule } from '@cluster/cluster.module';
import { IamModule } from '@iam/iam.module';
import { KiriTansuModule } from '@kiri-tansu/kiri-tansu.module';
import { RdidModule } from '@rdid/rdid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ErrorModule,
    LoginModule,
    DashboardModule,
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
