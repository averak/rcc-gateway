import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { KiriTansuRoutingModule } from './kiri-tansu-routing.module';

// components
import { KiriTansuComponent } from './kiri-tansu.component';
import { ItemsComponent } from './items/items.component';
import { ItemsContentComponent } from './items-content/items-content.component';

@NgModule({
  declarations: [KiriTansuComponent, ItemsComponent, ItemsContentComponent],
  imports: [SharedModule, KiriTansuRoutingModule],
})
export class KiriTansuModule {}
