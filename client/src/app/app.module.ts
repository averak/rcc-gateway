import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { TopComponent } from './components/page/top/top.component';
import { ServiceCardComponent } from './components/presentational/service-card/service-card.component';

@NgModule({
  declarations: [AppComponent, TopComponent, ServiceCardComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
