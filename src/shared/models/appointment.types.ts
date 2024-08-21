import {User} from "./user.types.ts";
import {Service} from "./service.types.ts";

export interface Appointment {
  id: number;
  client: User;
  employee: User;
  date: Date;
  service: Service;
}