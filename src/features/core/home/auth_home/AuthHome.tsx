import {useState} from "react";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {User} from "../../../../models/user.types.ts";
import {ServiceWithUsers} from "../../../../models/service.types.ts";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "./service_list_section/ServiceList.tsx";
import ServiceEmployees from "./service_employees/ServiceEmployees.tsx";

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
  }
];

const AuthHome = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceWithUsers | null>(null);

  const handleOpen = (service: ServiceWithUsers) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box>
      <WelcomeSection user={dummyMainUser}/>
      <ServiceList services={dummyServices} handleOpen={handleOpen}/>
      <ServiceEmployees selectedService={selectedService} navigate={navigate} open={open} onClose={handleClose}/>
    </Box>
  );
};

export default AuthHome;