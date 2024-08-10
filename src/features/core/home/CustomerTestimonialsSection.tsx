import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomerTestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Why Choose Flow?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            “Flow has transformed my wellness routine – their services are top-notch!” – [Client Name]
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            “Booking appointments is so easy and convenient with Flow's online system.” – [Client Name]
          </Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={() => navigate('/testimonials')}>
        Read More Testimonials
      </Button>
    </Box>
  );
};

export default CustomerTestimonialsSection;