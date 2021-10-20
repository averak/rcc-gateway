import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// components
import { DashboardComponent } from './dashboard.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductVersionChipComponent } from './product-version-chip/product-version-chip.component';
import { ProductListContentsComponent } from './product-list-contents/product-list-contents.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductCardComponent,
    ProductVersionChipComponent,
    ProductListContentsComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
