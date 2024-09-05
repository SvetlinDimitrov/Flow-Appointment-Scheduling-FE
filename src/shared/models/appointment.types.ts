import {User} from "./user.types.ts";
import {Service} from "./service.types.ts";

export enum AppointmentStatus {
  NOT_APPROVED,
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