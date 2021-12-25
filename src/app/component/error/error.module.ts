import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';

// components
import { ErrorComponent } from '@error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [SharedModule],
})
export class ErrorModule {}
