import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

// components
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
