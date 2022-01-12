import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { RdidRoutingModule } from '@rdid/rdid-routing.module';

// components
import { RdidComponent } from '@rdid/rdid.component';
import { UsersComponent } from '@rdid/users/users.component';
import { UsersContentComponent } from '@rdid/users-content/users-content.component';
import { UsersTableComponent } from '@rdid/users-table/users-table.component';
import { UsersNewComponent } from '@rdid/users-new/users-new.component';
import { MypageContentsComponent } from '@rdid/mypage-contents/mypage-contents.component';
import { UserProfileEditComponent } from '@rdid/user-profile-edit/user-profile-edit.component';
import { UserPasswordEditComponent } from '@rdid/user-password-edit/user-password-edit.component';
import { UserEditComponent } from '@rdid/user-edit/user-edit.component';

@NgModule({
  declarations: [
    RdidComponent,
    UsersComponent,
    UsersContentComponent,
    UsersTableComponent,
    UsersNewComponent,
    MypageContentsComponent,
    UserProfileEditComponent,
    UserPasswordEditComponent,
    UserEditComponent,
  ],
  imports: [SharedModule, RdidRoutingModule],
})
export class RdidModule {}
