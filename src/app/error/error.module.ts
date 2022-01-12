import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { ErrorRoutingModule } from '@error/error-routing.module';

// components
import { ErrorComponent } from '@error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [SharedModule, ErrorRoutingModule],
})
export class ErrorModule {}
