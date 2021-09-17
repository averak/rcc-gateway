import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { ProductCardComponent } from './components/presentational/product-card/product-card.component';
import { DashboardComponent } from './components/page/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
