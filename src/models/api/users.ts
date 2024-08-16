export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
}

export interface UpdateUserAdminRequest {
  firstName: string;
  lastName: string;
  role: UserRole;
}

export enum UserRole {
  ADMINISTRATOR = "ADMINISTRATOR",
  EMPLOYEE = "EMPLOYEE",
  CLIENT = "CLIENT"
}