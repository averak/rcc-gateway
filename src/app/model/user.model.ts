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

const currentYear: number = new Date().getFullYear();
export const admissionYears = [...Array(8)].map(
  (_: undefined, idx: number) => idx + currentYear - 7
);
