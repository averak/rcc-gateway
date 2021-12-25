import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { LoginedGuard } from '@shared/guard/logined.guard';

// components
import { LoginComponent } from '@login/login.component';

const routes: Routes = [
  {
    path: '',
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
