import {useState} from "react";
import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import ServiceCard from "./service-card/ServiceCard.tsx";
import {AdminServiceProps, ServiceProps, ServiceWithUsers} from "../../../shared/models/service.types.ts";

interface ServiceListProps {
  services: ServiceWithUsers[];
  handleDeleteService: ((service: ServiceWithUsers) => void) | null;
  handleUpdateService: ((service: ServiceWithUsers) => void) | null;
  handleViewStaff: (service: ServiceWithUsers) => void;
}

const ServiceList = ({services, handleUpdateService, handleDeleteService, handleViewStaff}: ServiceListProps) => {

  const [currentPage, setCurrentPage] = useState(0);

  const isXs = useMediaQuery('(max-width:600px)');
  const servicesPerPage = isXs ? 1 : 4;

  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * servicesPerPage < services.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Explore Our Services
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}
           gap={2}>
        {currentServices.map((service, index) => {
          const serviceProps: ServiceProps | AdminServiceProps = {
            handleViewEmployees: () => handleViewStaff(service),
          };

          if (handleUpdateService && handleDeleteService) {
            (serviceProps as AdminServiceProps).handleUpdateService = () => handleUpdateService(service);
            (serviceProps as AdminServiceProps).handleDeleteService = () => handleDeleteService(service);
          }

          return (
            <ServiceCard key={index}
                         selectedService={service}
                         serviceContextProps={serviceProps}/>
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
        <Button onClick={handleNextPage} disabled={endIndex >= services.length}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceList;