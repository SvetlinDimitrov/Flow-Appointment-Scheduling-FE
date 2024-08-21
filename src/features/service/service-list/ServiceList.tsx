import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import ServiceCard from "./service-card/ServiceCard.tsx";
import {AdminServiceProps, ServiceProps, ServiceWithUsers} from "../../../shared/models/service.types.ts";
import usePagination from "../../../hooks/custom/usePagination.ts";

interface ServiceListProps {
  services: ServiceWithUsers[];
  handleDeleteService: ((service: ServiceWithUsers) => void) | null;
  handleUpdateService: ((service: ServiceWithUsers) => void) | null;
  handleViewStaff: (service: ServiceWithUsers) => void;
}

const ServiceList = ({services, handleUpdateService, handleDeleteService, handleViewStaff}: ServiceListProps) => {
  const isXs = useMediaQuery('(max-width:600px)');
  const servicesPerPage = isXs ? 1 : 4;

  const {
    currentPage,
    totalPages,
    currentItems,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(services, servicesPerPage);

  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Explore Our Services
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
        {currentItems.map((service, index) => {
          const serviceProps: ServiceProps | AdminServiceProps = {
            handleViewEmployees: () => handleViewStaff(service),
          };

          if (handleUpdateService && handleDeleteService) {
            (serviceProps as AdminServiceProps).handleUpdateService = () => handleUpdateService(service);
            (serviceProps as AdminServiceProps).handleDeleteService = () => handleDeleteService(service);
          }

          return (
            <ServiceCard key={index} selectedService={service} serviceContextProps={serviceProps}/>
          );
        })}
      </Box>
      <Box margin={"auto"} width={"50%"} display={"flex"} minWidth={200}
           justifyContent={"center"} alignItems={"center"} mt={2}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Typography variant={"body2"}>
          {currentPage + 1} / {totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={currentPage + 1 >= totalPages}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceList;