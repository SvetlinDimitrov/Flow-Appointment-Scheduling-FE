import ServiceCard from "./service-card/ServiceCard.tsx";
import {styled} from "@mui/system";
import {Box, CircularProgress, Pagination, Stack, Typography, useMediaQuery} from "@mui/material";
import usePaginatedQuery from "../../../../hooks/custom/usePaginatedQuery.ts";
import {Service} from "../../../../shared/models/service.types.ts";
import useGetAllServicesQuery from "../../../../hooks/services/query/useGetAllServicesQuery.ts";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";
import {useEffect} from "react";

const MainWrapper = styled(Stack)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  gap: theme.spacing(5),
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  minHeight: '80vh',
}));

const CardsHolder = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  justifyContent: 'center',
  gap: theme.spacing(5),
  alignItems: 'center',
}));

const ServiceGuestSection = () => {
  const isXs = useMediaQuery('(max-width:1200px)');
  const servicesPerPage = isXs ? 1 : 3;

  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange,
    refetch
  } = usePaginatedQuery<Service>(useGetAllServicesQuery, 0, servicesPerPage);

  useEffect(() => {
    refetch();
  }, [servicesPerPage, refetch]);

  if (error) return <PageNotFound/>;

  return (
    <MainWrapper>
      <Typography variant={"h4"} fontWeight={'bold'} fontSize={'2.5rem'} color={'#333'}>
        Our Services
      </Typography>
      <Typography variant={"body1"} fontSize={'1.25rem'} lineHeight={1.5} color={'#666'}>
        We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and
        skincare treatments.
      </Typography>

      {isLoading &&
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="540px">
          <CircularProgress/>
        </Box>
      }
      {!isLoading && data && <>
      <CardsHolder>
        {data.content.map((service, index) => (
          <ServiceCard
            key={index}
            image={"/static/images/no-picture-found.jpg"}
            alt={service.name}
            title={service.name}
            navigateTo={`/service/${service.id}`}
          />
        ))}
      </CardsHolder>
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={data.totalPages}
            page={page + 1}
            onChange={(_, value) => handlePageChange(value)}
            color="primary"
            boundaryCount={isXs ? 0 : 1}
            siblingCount={isXs ? 0 : 1}
          />
        </Box>
      </>
      }
    </MainWrapper>
  );
};

export default ServiceGuestSection;