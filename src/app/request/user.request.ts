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

export type LoginUserPasswordUpdateRequest = {
  currentPassword: string;
  newPassword: string;
};
