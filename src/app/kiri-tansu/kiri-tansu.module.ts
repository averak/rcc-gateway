import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { KiriTansuRoutingModule } from '@kiri-tansu/kiri-tansu-routing.module';

// components
import { KiriTansuComponent } from '@kiri-tansu/kiri-tansu.component';
import { ItemsComponent } from '@kiri-tansu/items/items.component';
import { ItemsContentComponent } from '@kiri-tansu/items-content/items-content.component';

@NgModule({
  declarations: [KiriTansuComponent, ItemsComponent, ItemsContentComponent],
  imports: [SharedModule, KiriTansuRoutingModule],
})
export class KiriTansuModule {}
