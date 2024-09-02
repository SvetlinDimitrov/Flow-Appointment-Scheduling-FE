import {Box} from "@mui/material";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "../../../../features/service/service-list/ServiceList.tsx";
import StaffList from "../../../../features/users/staff-list/StaffList.tsx";
import {useContext, useEffect, useState} from "react";
import {Service} from "../../../models/service.types.ts";
import useGetUserQuery from "../../../../hooks/users/query/useGetUserQuery.ts";
import {UserAuthContext} from "../../../context/UserAuthContext.tsx";
import LoadingSpinner from "../../loading/LoadingSpinner.tsx";
import PageNotFound from "../../not-found/PageNotFound.tsx";
import {UserRole} from "../../../models/user.types.ts";
import {useNavigate} from "react-router-dom";

const AuthHome = () => {

  const navigate = useNavigate();

  const {userId, role} = useContext(UserAuthContext)!;

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  if (!userId) return <PageNotFound/>;

  useEffect(() => {
    if (role === UserRole.ADMINISTRATOR) {
      navigate('/admin/services');
    } else if (role === UserRole.EMPLOYEE) {
      navigate('/staff/appointments');
    }
  }, [role, navigate]);

  const {data, isLoading, error} = useGetUserQuery(userId);

  const handleViewStaff = (service: Service) => {
    setSelectedService(service);
  }

  const handleBookWithStaff = (staffEmail: string, serviceId: number) => {
    console.log("Book with staff" + staffEmail + " for service " + serviceId);
  }

  if (isLoading || !data) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;
  if (role === UserRole.ADMINISTRATOR || role === UserRole.EMPLOYEE) return null;

  return (
    <Box>
      <WelcomeSection user={data}/>
      <ServiceList
        handleViewStaff={handleViewStaff}
        handleUpdateService={null}
        handleDeleteService={null}/>
      {selectedService &&
        <StaffList
          selectedService={selectedService}
          handleBookWithStaff={handleBookWithStaff}
          handleDeleteEmployeeFromService={null}
        />
      }
    </Box>
  );
};

export default AuthHome;