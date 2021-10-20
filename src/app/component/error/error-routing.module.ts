import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ErrorComponent } from './error.component';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
