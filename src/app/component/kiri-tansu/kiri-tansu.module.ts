import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { KiriTansuComponent } from './kiri-tansu.component';
import { ItemsComponent } from './items/items.component';
import { ItemsContentComponent } from './items-content/items-content.component';

@NgModule({
  declarations: [KiriTansuComponent, ItemsComponent, ItemsContentComponent],
  imports: [CommonModule, SharedModule],
})
export class KiriTansuModule {}
