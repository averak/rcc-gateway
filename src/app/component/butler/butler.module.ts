import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ButlerRoutingModule } from './butler-routing.module';

// components
import { ButlerComponent } from './butler.component';
import { PurchaseOrdersContentsComponent } from './purchase-orders-contents/purchase-orders-contents.component';
import { PurchaseOrdersNewFormComponent } from './purchase-orders-new-form/purchase-orders-new-form.component';
import { PurchaseOrdersHistoriesComponent } from './purchase-orders-histories/purchase-orders-histories.component';

@NgModule({
  declarations: [
    ButlerComponent,
    PurchaseOrdersContentsComponent,
    PurchaseOrdersNewFormComponent,
    PurchaseOrdersHistoriesComponent,
  ],
  imports: [SharedModule, ButlerRoutingModule],
})
export class ButlerModule {}
