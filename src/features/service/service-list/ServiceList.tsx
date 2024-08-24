import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import ServiceCard from "./service-card/ServiceCard.tsx";
import {AdminServiceProps, Service, ServiceProps} from "../../../shared/models/service.types.ts";
import usePaginatedQuery from "../../../hooks/custom/usePaginatedQuery.ts";
import LoadingSpinner from "../../../shared/core/loading/LoadingSpinner.tsx";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import useGetAllServicesQuery from "../../../hooks/services/query/useGetAllServicesQuery.ts";

interface ServiceListProps {
  handleDeleteService: ((service: Service) => void) | null;
  handleUpdateService: ((service: Service) => void) | null;
  handleViewStaff: (service: Service) => void;
}

const ServiceList = (
  {
    handleUpdateService,
    handleDeleteService,
    handleViewStaff
  }: ServiceListProps) => {
  const isXs = useMediaQuery('(max-width:600px)');
  const servicesPerPage = isXs ? 1 : 4;

  const {
    data,
    isLoading,
    error,
    page,
    handleNextPage,
    handlePreviousPage,
  } = usePaginatedQuery<Service>(useGetAllServicesQuery, 0, servicesPerPage);

  if (isLoading) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Explore Our Services
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
        {data?.content.map((service, index) => {
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
      <Box margin={"auto"} width={"50%"} display={"flex"} minWidth={200} justifyContent={"center"} alignItems={"center"}
           mt={2}>
        <Button onClick={handlePreviousPage} disabled={page === 0}>
          Previous
        </Button>
        <Typography variant={"body2"}>
          {page + 1} / {data?.totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={data && page >= data.totalPages - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceList;