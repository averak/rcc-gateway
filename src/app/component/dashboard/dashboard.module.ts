import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

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
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
