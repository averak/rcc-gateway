import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { RdidComponent } from './rdid.component';
import { UsersComponent } from './users/users.component';
import { UsersContentComponent } from './users-content/users-content.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { MypageContentsComponent } from './mypage-contents/mypage-contents.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserPasswordEditComponent } from './user-password-edit/user-password-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';

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
  imports: [CommonModule, SharedModule],
  exports: [RdidComponent],
})
export class RdidModule {}
