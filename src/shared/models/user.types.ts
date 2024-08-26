import {ServiceWithUsers} from "./service.types.ts";
import {DateTime} from 'luxon';

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
  staffDetails: StaffDetails | null;
}

export interface StaffDetails {
  salary: number;
  profit: number;
  completedAppointments: number;
  startDate: Date,
  beginWorkingHour: DateTime;
  endWorkingHour: DateTime;
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