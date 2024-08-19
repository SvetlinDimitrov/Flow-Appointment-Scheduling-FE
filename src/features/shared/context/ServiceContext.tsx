import {createContext, ReactNode, useContext, useState} from "react";
import {ServiceWithUsers} from "../../../models/service.types.ts";
import {User} from "../../../models/user.types.ts";

const dummyUsers: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  },
  {
    id: 3,
    firstName: "John2",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 4,
    firstName: "Jane2",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  },
  {
    id: 5,
    firstName: "John3",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 6,
    firstName: "Jane3",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  },
  {
    id: 7,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 8,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  },
  {
    id: 9,
    firstName: "John2",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 10,
    firstName: "Jane2",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  },
  {
    id: 11,
    firstName: "John3",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Therapist"
  },
  {
    id: 12,
    firstName: "Jane3",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "Therapist"
  }
];

const dummyServices: ServiceWithUsers[] = [
  {
    id: 1,
    name: "Deep Tissue Massage",
    description: "A therapeutic massage technique to relieve deep muscle tension.",
    duration: 90,
    price: 100,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 1,
    name: "Deep Tissue Massage 2",
    description: "A therapeutic massage technique to relieve deep muscle tension.",
    duration: 90,
    price: 100,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage 2",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy 2",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 1,
    name: "Deep Tissue Massage 3",
    description: "A therapeutic massage technique to relieve deep muscle tension.",
    duration: 90,
    price: 100,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage 3",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy 3",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    totalAppointments: 5,
    totalProfit: 500,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  }
];

interface ServiceContextProps {
  services: ServiceWithUsers[];
}

const ServiceContext = createContext<ServiceContextProps | undefined>(undefined);

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServiceContext must be used within a ServiceProvider");
  }
  return context;
};

interface ServiceProviderProps {
  children: ReactNode;
}

const ServiceProvider = ({children}: ServiceProviderProps) => {

  // @ts-ignore
  const [services, setServices] = useState<ServiceWithUsers[]>(dummyServices);

  return (
    <ServiceContext.Provider
      value={{
        services,
      }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;