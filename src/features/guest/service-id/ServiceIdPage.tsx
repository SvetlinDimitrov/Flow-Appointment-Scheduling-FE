import {Box, Button, Grid, useMediaQuery, useTheme} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {useContext, useState} from 'react';
import useGetServiceByIdQuery from '../../../hooks/services/query/useGetServiceByIdQuery.ts';
import PageNotFound from '../../../shared/core/not-found/PageNotFound.tsx';
import LoadingSpinner from '../../../shared/core/loading/main-loader/LoadingSpinner.tsx';
import {UserAuthContext} from '../../../shared/context/UserAuthContext.tsx';
import {User} from '../../../shared/models/user.types.ts';
import BookAppointmentModal from '../../appointment/appointment-client/book-modal/BookAppointmentModal.tsx';
import ServiceDetails from './ServiceDetails.tsx';
import StaffList from '../../users/staff-list/StaffList.tsx';

const ServicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { userId } = useContext(UserAuthContext)!;

  const [selectedStaff, setSelectedStaff] = useState<User | null>(null);

  const { data: service, isLoading, error } = useGetServiceByIdQuery(id);

  const theme = useTheme();
  const isBelow1200 = useMediaQuery(theme.breakpoints.down(1200));
  const isBelow600 = useMediaQuery(theme.breakpoints.down(600));

  const value = isBelow600 ? 1 : isBelow1200 ? 2 : 4;

  if (error) return <PageNotFound />;
  if (isLoading || !service) return <LoadingSpinner />;

  return (
    <>
      {service && selectedStaff && (
        <BookAppointmentModal
          open={!!selectedStaff}
          onClose={() => setSelectedStaff(null)}
          service={service}
          staff={selectedStaff}
        />
      )}
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80%'
          },
          margin: 'auto',
          marginTop: 6,
          marginBottom: 2
        }}
      >
        <Grid
          container
          spacing={2}
          mt={2}
          sx={{backgroundColor: 'background.paper', padding: 2}}
        >
          <Grid item xs={12} sm={12}>
            <ServiceDetails service={service}/>
            {!userId && (
              <Box display="flex" justifyContent="center" sx={{mt: 3}}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/login')}
                  disabled={!service.availability}
                >
                  Book Now
                </Button>
              </Box>
            )}
          </Grid>
          {userId && service.availability &&(
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" sx={{mt: 3}}>
                <StaffList
                  selectedService={service}
                  handleDeleteEmployeeFromService={null}
                  handleBookWithStaff={(staff) => setSelectedStaff(staff)}
                  showStaffNumbers={value}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default ServicePage;