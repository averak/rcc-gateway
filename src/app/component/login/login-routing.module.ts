import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from './login.component';

// guards
import { LoginedGuard } from 'src/app/shared/guard/logined.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginedGuard],
    data: { breadcrumb: 'ログイン' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
