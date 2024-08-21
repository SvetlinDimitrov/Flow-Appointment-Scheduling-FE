import {Box} from "@mui/material";
import {User, UserRole} from "../../../models/user.types.ts";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "../../../../features/service/service-list/ServiceList.tsx";
import StaffList from "../../../../features/users/staff-list/StaffList.tsx";
import {useServiceContext} from "../../../context/ServiceContext.tsx";
import {useState} from "react";
import {ServiceProps, ServiceWithUsers} from "../../../models/service.types.ts";

const dummyMainUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "test1@abv.bg",
  role: UserRole.CLIENT,
  employeeData: null
};

const AuthHome = () => {

  const {services} = useServiceContext();

  const [selectedService, setSelectedService] = useState<ServiceWithUsers | null>(null);

  const handleViewEmployees = (service: ServiceWithUsers) => {
    setSelectedService(service);
  }

  const childProps: ServiceProps = { handleViewEmployees };

  const visualizeAdminBoard = false;

  return (
    <Box>
      <WelcomeSection user={dummyMainUser}/>
      <ServiceList services={services}
                   props={childProps}/>

      <StaffList selectedService={selectedService} visualizeAdminBoard={visualizeAdminBoard}/>
    </Box>
  );
};

export default AuthHome;