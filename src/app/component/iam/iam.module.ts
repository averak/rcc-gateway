import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { IamComponent } from './iam.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { RoleQuotasComponent } from './role-quotas/role-quotas.component';
import { UserGroupsContentComponent } from './user-groups-content/user-groups-content.component';

@NgModule({
  declarations: [
    IamComponent,
    UserGroupsComponent,
    RoleQuotasComponent,
    UserGroupsContentComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class IamModule {}
