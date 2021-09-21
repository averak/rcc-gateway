import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared module
import { SharedModule } from './shared/shared.module';

// dashboard components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductCardComponent } from './component/dashboard/product-card/product-card.component';
import { ProductVersionChipComponent } from './component/dashboard/product-version-chip/product-version-chip.component';
import { ProductListContentsComponent } from './component/dashboard/product-list-contents/product-list-contents.component';

// cluster components
import { ClusterComponent } from './component/cluster/cluster.component';

// common components
import { HeaderComponent } from './component/common/header/header.component';
import { SidenavComponent } from './component/common/sidenav/sidenav.component';
import { TopicPathComponent } from './component/common/topic-path/topic-path.component';

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

    // common components
    HeaderComponent,
    SidenavComponent,
    TopicPathComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
