export type UserModel = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  currentPassword: string;
  newPassword: string;
  roleId: number;
  admissionYear: number;
};

export type UsersModel = {
  users: UserModel[];
};
