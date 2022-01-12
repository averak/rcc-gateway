import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { LoginRoutingModule } from '@login/login-routing.module';

// components
import { LoginComponent } from '@login/login.component';
import { LoginFormComponent } from '@login/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
