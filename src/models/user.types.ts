export enum UserRole {
  ADMINISTRATOR = 'ADMINISTRATOR',
  EMPLOYEE = 'EMPLOYEE',
  CLIENT = 'CLIENT'
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  employeeData: EmployeeData | null;
}

export interface EmployeeData {
  salary: number;
  profit: number;
  completedAppointments: number;
  experience: number;
  beginWorkingHour: Date;
  endWorkingHour: Date;
}