import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorRoutingModule } from './error-routing.module';

// components
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [SharedModule, ErrorRoutingModule],
})
export class ErrorModule {}
