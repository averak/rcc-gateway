export type UserCreateRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  admissionYear: number;
};

export type UserUpdateRequest = {
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  admissionYear: number;
};

export type LoginUserUpdateRequest = {
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginUserPasswordUpdateRequest = {
  currentPassword: string;
  newPassword: string;
};
