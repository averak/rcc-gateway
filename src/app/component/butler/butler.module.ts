import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ButlerRoutingModule } from './butler-routing.module';

// components
import { ButlerComponent } from './butler.component';

@NgModule({
  declarations: [ButlerComponent],
  imports: [SharedModule, ButlerRoutingModule],
})
export class ButlerModule {}
