import {User} from "./user.types.ts";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  place: Location;
}

export interface Location{
  name: string;
  capacity: number;
}

export interface ServiceWithUsers {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  place: Location;
  totalProfit: number;
  totalAppointments: number;
  employees: User[];
}

export interface ModifyService {
  name: string;
  description: string;
  duration: number;
  price: number;
  placeName: string;
}

export interface ServiceProps {
  handleViewEmployees: () => void;
}

export interface AdminServiceProps extends ServiceProps {
  handleDeleteService: () => void;
  handleUpdateService: () => void;
}

