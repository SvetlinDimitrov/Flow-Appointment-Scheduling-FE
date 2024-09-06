import {User} from "./user.types.ts";
import {Service} from "./service.types.ts";

export enum AppointmentStatus {
  NOT_APPROVED,
  APPROVED,
  COMPLETED,
  CANCELED
}

export enum UpdateAppointmentStatus {
  APPROVED,
  COMPLETED,
  CANCELED
}

export interface Appointment {
  id: number;
  client: User;
  staff: User;
  startDate: Date;
  endDate: Date;
  status: AppointmentStatus;
  service: Service;
}

export interface ShortAppointment {
  id: number;
  serviceName: string;
  startDate: Date;
  endDate: Date;
}

export interface AppointmentCreate {
  serviceId: number;
  clientEmail: string;
  staffEmail: string;
  date: Date;
}

export interface AppointmentUpdate {
  status: UpdateAppointmentStatus;
}