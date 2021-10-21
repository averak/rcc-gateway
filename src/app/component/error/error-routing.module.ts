import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ErrorComponent } from './error.component';

const routes: Routes = [{ path: '', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
