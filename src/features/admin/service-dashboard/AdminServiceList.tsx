import {Box, Pagination, Typography, useMediaQuery, useTheme} from "@mui/material";
import ServiceCard from "../../service/service-card/ServiceCard.tsx";
import {Service} from "../../../shared/models/service.types.ts";
import usePaginatedQuery from "../../../hooks/custom/usePaginatedQuery.ts";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import useGetAllServicesQuery from "../../../hooks/services/query/useGetAllServicesQuery.ts";
import {useEffect, useState} from "react";
import ContainerLoader from "../../../shared/core/loading/container-loader/ContainerLoader.tsx";

interface ServiceListProps {
  handleDeleteService: (service: Service) => void;
  handleUpdateService: (service: Service) => void;
  handleViewStaff: (service: Service) => void;
}

const AdminServiceList = (
  {
    handleUpdateService,
    handleDeleteService,
    handleViewStaff,
  }: ServiceListProps) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const [prevBreakpoints, setPrevBreakpoints] = useState({ isMd, isLg });

  const servicesPerPage = isMd ? 1 : isLg ? 2 : 3;
  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange,
    setPage,
  } = usePaginatedQuery<Service>(useGetAllServicesQuery, 0, servicesPerPage);

  useEffect(() => {
    if (prevBreakpoints.isMd !== isMd || prevBreakpoints.isLg !== isLg) {
      setPage(0);
      setPrevBreakpoints({ isMd, isLg });
    }
  }, [isMd, isLg, prevBreakpoints, setPage]);

  if (error) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Explore Our Services
      </Typography>
      {isLoading && <ContainerLoader height={660}/>}
      {!isLoading && data &&
        <>
          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
            {data.content.map((service) => (
              <ServiceCard
                key={service.id}
                selectedService={service}
                handleDeleteService={() => handleDeleteService(service)}
                handleUpdateService={() => handleUpdateService(service)}
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
              boundaryCount={(isMd || isLg) ? 0 : 1}
              siblingCount={(isMd || isLg) ? 0 : 1}
            />
          </Box>
        </>
      }
    </Box>
  );
};

export default AdminServiceList;