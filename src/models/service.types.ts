export interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  place: Location;
}

export interface Location{
  name: string;
  capacity: number;
}