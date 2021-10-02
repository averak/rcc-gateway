import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
