import { UserModel } from '@model/user.model';
import { UserRoleEnum } from '@enums/user-role.enum';

export type UserGroupRole = {
  productName: string;
  role: UserRoleEnum;
};

export type UserGroupModel = {
  name: string;
  description: string;
  roles: UserGroupRole[];
  members: UserModel[];
};
