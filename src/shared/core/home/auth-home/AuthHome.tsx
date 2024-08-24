import {Box} from "@mui/material";
import WelcomeSection from "./welcome_section/WelcomeSection.tsx";
import ServiceList from "../../../../features/service/service-list/ServiceList.tsx";
import StaffList from "../../../../features/users/staff-list/StaffList.tsx";
import {useContext, useState} from "react";
import {Service} from "../../../models/service.types.ts";
import {getAllUsersByServiceId} from "../../../../services/user-service.ts";
import useGetUserQuery from "../../../../hooks/users/query/useGetUserQuery.ts";
import {UserAuthContext} from "../../../context/UserAuthContext.tsx";
import LoadingSpinner from "../../loading/LoadingSpinner.tsx";
import PageNotFound from "../../not-found/PageNotFound.tsx";

const AuthHome = () => {

  const {userId} = useContext(UserAuthContext)!;

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  if (!userId) return <PageNotFound/>;

  const {data, isLoading, error} = useGetUserQuery(userId);

  const handleViewStaff = (service: Service) => {
    setSelectedService(service);
  }

  const handleBookWithStaff = (staffEmail: string, serviceId: number) => {
    console.log("Book with staff" + staffEmail + " for service " + serviceId);
  }

  if (isLoading || !data) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <Box>
      <WelcomeSection user={data}/>
      <ServiceList
        handleViewStaff={handleViewStaff}
        handleUpdateService={null}
        handleDeleteService={null}/>
      {selectedService &&
        <StaffList
          fetchUsersByServiceId={getAllUsersByServiceId}
          selectedService={selectedService}
          handleBookWithStaff={handleBookWithStaff}
          handleDeleteEmployeeFromService={null}
        />
      }
    </Box>
  );
};

export default AuthHome;