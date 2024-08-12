import {Box, Typography} from '@mui/material';

const IntroductionSection = () => {
  return (
    <Box sx={{textAlign: 'center', p: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Journey to Wellness
      </Typography>
      <Typography variant="body1" paragraph>
        Flow was born out of a passion for wellness and a desire to create a sanctuary where people can rejuvenate their
        bodies and minds. Since our inception, we've been dedicated to offering top-tier fitness, spa, and wellness
        services tailored to the needs of our diverse clientele.
      </Typography>
      <Box
        component="img"
        src="https://softwareresources.com/wp-content/uploads/2013/07/Building-Great-Founding-Teams-1200x628-1080x628.jpg"
        alt="Welcoming image of the spa"
        sx={{width: '100%', maxWidth: 600, borderRadius: 2, mt: 4}}
      />
    </Box>
  );
};

export default IntroductionSection;