import {ServiceWithUsers} from "./service.types.ts";

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

export interface StaffCardProps {
  employee: ServiceWithUsers["employees"][0];
}

export interface AdminStaffCardProps extends StaffCardProps {
  handleDeleteEmployeeFromService: () => void;
}

export interface UserStaffCardProps extends StaffCardProps {
  handleBookWithStaff: () => void;
}