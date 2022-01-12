import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { IamRoutingModule } from '@iam/iam-routing.module';

// components
import { IamComponent } from '@iam/iam.component';
import { UserGroupsComponent } from '@iam/user-groups/user-groups.component';
import { RoleQuotasComponent } from '@iam/role-quotas/role-quotas.component';
import { UserGroupsContentComponent } from '@iam/user-groups-content/user-groups-content.component';
import { UserGroupsTableComponent } from '@iam/user-groups-table/user-groups-table.component';

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
