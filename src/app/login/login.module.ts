import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';

// components
import { LoginComponent } from '@login/login.component';
import { LoginFormComponent } from '@login/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [SharedModule],
})
export class LoginModule {}
