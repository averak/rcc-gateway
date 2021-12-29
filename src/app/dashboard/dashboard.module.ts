import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';

// components
import { DashboardComponent } from '@dashboard/dashboard.component';
import { ProductCardComponent } from '@dashboard/product-card/product-card.component';
import { ProductVersionChipComponent } from '@dashboard/product-version-chip/product-version-chip.component';
import { ProductListContentsComponent } from '@dashboard/product-list-contents/product-list-contents.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductCardComponent,
    ProductVersionChipComponent,
    ProductListContentsComponent,
  ],
  imports: [SharedModule],
})
export class DashboardModule {}
