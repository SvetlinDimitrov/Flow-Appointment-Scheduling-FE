import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { AccessTime, Cancel, CheckCircle, LocationOn, MonetizationOn } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import useGetServiceByIdQuery from "../../../hooks/services/query/useGetServiceByIdQuery.ts";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import LoadingSpinner from "../../../shared/core/loading/main-loader/LoadingSpinner.tsx";
import { Duration } from "luxon";
import StaffList from "../../users/staff-list/StaffList.tsx";
import { UserAuthContext } from "../../../shared/context/UserAuthContext.tsx";
import {useContext} from "react";

const ServicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { userId } = useContext(UserAuthContext)!;

  if (!id) return <PageNotFound />;

  const serviceId = parseInt(id);

  const { data: service, isLoading, error } = useGetServiceByIdQuery(serviceId);

  const handleBookNowClick = () => {
    navigate('/login');
  };

  if (error) return <PageNotFound />;
  if (isLoading || !service) return <LoadingSpinner />;

  return (
    <Container sx={{marginTop: 6 , marginBottom: 6}}>
      <Grid container spacing={2} mt={5} sx={{ maxWidth: 800, margin: 'auto', backgroundColor: 'background.paper', padding: 2 }}>
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            height={300}
            width={'100%'}
            src="/static/images/no-picture-found.jpg"
            alt={service.name}
            sx={{objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography textAlign={'center'} variant="h2" gutterBottom>
            {service.name}
          </Typography>
          <Typography textAlign={'center'} variant="h6" color="textSecondary" gutterBottom>
            {service.description}
          </Typography>
          <Grid container spacing={2} mt={2} >
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <MonetizationOn sx={{ mr: 1 }} />
                <Typography variant="subtitle1">${service.price}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <AccessTime sx={{ mr: 1 }} />
                <Typography variant="subtitle1">{Duration.fromISO(service.duration).as('minutes')} minutes</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                {service.availability ? <CheckCircle sx={{ mr: 1, color: 'green' }} /> : <Cancel sx={{ mr: 1, color: 'red' }} />}
                <Typography variant="subtitle1">{service.availability ? 'Available' : 'Not Available'}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="subtitle1">{service.workSpace.name}</Typography>
              </Box>
            </Grid>
          </Grid>
          {!userId && (
            <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" onClick={handleBookNowClick}>Book Now</Button>
            </Box>
          )}
        </Grid>
        {userId && (
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
              <StaffList
                selectedService={service}
                handleDeleteEmployeeFromService={null}
                handleBookWithStaff={() => console.log('Book with staff')}
                showStaffNumbers={2}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ServicePage;