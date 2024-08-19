import {useState} from "react";
import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import ServiceCard from "../../shared/components/service/ServiceCard.tsx";
import {ServiceProps, ServiceWithUsers} from "../../../models/service.types.ts";

interface ServiceListProps {
  services: ServiceWithUsers[];
  props: ServiceProps;
}

const ServiceList = ({props, services}: ServiceListProps) => {

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
        {currentServices.map((service, index) => (
          <ServiceCard key={index}
                       selectedService={service}
                       serviceContextProps={props}/>
        ))}
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