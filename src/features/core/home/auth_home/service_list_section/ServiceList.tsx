import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";
import ServiceCard from "./service_card/ServiceCard.tsx";

interface ServiceListProps {
  services: ServiceWithUsers[];
  handleOpen: (service: ServiceWithUsers) => void;
}

const ServiceList = ({services, handleOpen}: ServiceListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 2;

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
    <Box p={4} width={"80%"} margin={"auto"}>
      <Typography variant={"h5"} mb={2} textAlign={"center"}>
        Explore Our Services
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}
           gap={2} margin={"auto"}>
        {currentServices.map((service, index) => (
          <ServiceCard key={index} service={service} handleOpen={handleOpen}/>
        ))}
      </Box>
      <Box margin={"auto"} width={"50%"} display={"flex"}
           justifyContent={"space-between"} alignItems={"center"} mt={2}>
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