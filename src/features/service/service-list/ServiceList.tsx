import {Box, Pagination, Typography, useMediaQuery, useTheme} from "@mui/material";
import ServiceCard from "./service-card/ServiceCard.tsx";
import {Service} from "../../../shared/models/service.types.ts";
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
    handleViewStaff,
  }: ServiceListProps) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const servicesPerPage = isXs ? 1 : 4;

  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange
  } = usePaginatedQuery<Service>(useGetAllServicesQuery, 0, servicesPerPage);

  if (isLoading) return <LoadingSpinner/>;
  if (error || !data) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Explore Our Services
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
        {data.content.map((service, index) => (
          <ServiceCard
            key={index}
            selectedService={service}
            handleDeleteService={handleDeleteService ? () => handleDeleteService(service) : undefined}
            handleUpdateService={handleUpdateService ? () => handleUpdateService(service) : undefined}
            handleViewEmployees={() => handleViewStaff(service)}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={data.totalPages}
          page={page + 1}
          onChange={(_, value) => handlePageChange(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ServiceList;