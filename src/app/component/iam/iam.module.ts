import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { IamRoutingModule } from './iam-routing.module';

// components
import { IamComponent } from './iam.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { RoleQuotasComponent } from './role-quotas/role-quotas.component';
import { UserGroupsContentComponent } from './user-groups-content/user-groups-content.component';
import { UserGroupsTableComponent } from './user-groups-table/user-groups-table.component';

@NgModule({
  declarations: [
    IamComponent,
    UserGroupsComponent,
    RoleQuotasComponent,
    UserGroupsContentComponent,
    UserGroupsTableComponent,
  ],
  imports: [SharedModule, IamRoutingModule],
})
export class IamModule {}
