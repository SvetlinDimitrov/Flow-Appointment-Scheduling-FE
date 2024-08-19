import {Box} from "@mui/material";
import {User} from "../../../../models/user.types.ts";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "../../../services/auth_home_service_list/ServiceList.tsx";
import ServiceEmployeesList from "../../../users/service_employee_list/ServiceEmployeesList.tsx";
import {useServiceContext} from "../../../shared/context/ServiceContext.tsx";
import {useState} from "react";
import {ServiceWithUsers, ServiceProps} from "../../../../models/service.types.ts";

const dummyMainUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "test1@abv.bg",
  role: "Client",
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

      <ServiceEmployeesList selectedService={selectedService} visualizeAdminBoard={visualizeAdminBoard}/>
    </Box>
  );
};

export default AuthHome;