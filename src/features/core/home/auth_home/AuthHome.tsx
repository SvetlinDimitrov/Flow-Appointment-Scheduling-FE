import {useState} from "react";
import {Box} from "@mui/material";
import {User} from "../../../../models/user.types.ts";
import {ServiceWithUsers} from "../../../../models/service.types.ts";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "../../../services/home_auth_service_list/ServiceList.tsx";
import ServiceEmployeesList from "../../../users/home_auth_list_employee/ServiceEmployeesList.tsx";

const dummyMainUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "test1@abv.bg",
  role: "Client"
};

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
    id:9,
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
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 1,
    name: "Deep Tissue Massage 2",
    description: "A therapeutic massage technique to relieve deep muscle tension.",
    duration: 90,
    price: 100,
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage 2",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy 2",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 1,
    name: "Deep Tissue Massage 3",
    description: "A therapeutic massage technique to relieve deep muscle tension.",
    duration: 90,
    price: 100,
    place: {name: "Therapy Room 2, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 2,
    name: "Swedish Massage 3",
    description: "A relaxing massage to improve circulation and relieve muscle tension.",
    duration: 60,
    price: 120,
    place: {name: "Therapy Room 1, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  },
  {
    id: 3,
    name: "Aromatherapy 3",
    description: "A massage using essential oils to promote relaxation and well-being.",
    duration: 75,
    price: 160,
    place: {name: "Therapy Room 3, Flow Wellness Center", capacity: 1},
    employees: dummyUsers
  }
];

const AuthHome = () => {
  const [selectedService, setSelectedService] = useState<ServiceWithUsers | null>(null);

  const handleOpen = (service: ServiceWithUsers) => {
    setSelectedService(service);
  };

  return (
    <Box>
      <WelcomeSection user={dummyMainUser}/>
      <ServiceList services={dummyServices} handleOpen={handleOpen}/>
      <ServiceEmployeesList selectedService={selectedService}/>
    </Box>
  );
};

export default AuthHome;