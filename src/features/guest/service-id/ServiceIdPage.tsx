import {Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';
import {AccessTime, Cancel, CheckCircle, LocationOn, MonetizationOn} from '@mui/icons-material';
import {useNavigate, useParams} from 'react-router-dom';
import useGetServiceByIdQuery from "../../../hooks/services/query/useGetServiceByIdQuery.ts";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import LoadingSpinner from "../../../shared/core/loading/LoadingSpinner.tsx";

const ServicePage = () => {
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();

  if (!id) return <PageNotFound/>;

  const serviceId = parseInt(id);

  const {data: service, isLoading, error} = useGetServiceByIdQuery(serviceId);

  const handleBookNowClick = () => {
    navigate('/login');
  };

  if (isLoading) return <LoadingSpinner/>;
  if (error || !service) return <PageNotFound/>;

  return (
    <Container>
      <Card sx={{maxWidth: 800, margin: 'auto', mt: 5, boxShadow: 3}}>
        <CardMedia
          component="img"
          height="300"
          image="/static/images/no-picture-found.jpg"
          alt={service.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {service.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {service.description}
          </Typography>
          <Grid container spacing={3} mt={2} justifyContent="space-around">
            <Grid item>
              <Box display="flex" alignItems="center">
                <MonetizationOn sx={{mr: 1}}/>
                <Typography variant="body1">${service.price}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <AccessTime sx={{mr: 1}}/>
                <Typography variant="body1">{service.duration} minutes</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                {service.availability ? <CheckCircle sx={{mr: 1, color: 'green'}}/> :
                  <Cancel sx={{mr: 1, color: 'red'}}/>}
                <Typography variant="body1">{service.availability ? 'Available' : 'Not Available'}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{mr: 1}}/>
                <Typography variant="body1">{service.workSpace.name}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" sx={{mt: 3}}>
            <Button variant="contained" color="primary" onClick={handleBookNowClick}>Book Now</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ServicePage;