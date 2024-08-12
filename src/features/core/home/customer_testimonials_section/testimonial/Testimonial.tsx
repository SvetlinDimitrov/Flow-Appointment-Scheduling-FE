import { Box, Typography, Avatar } from '@mui/material';

interface TestimonialProps {
  text: string;
  image: string;
  clientName: string;
}

const Testimonial = ({ text, image, clientName }: TestimonialProps) => {
  return (
   <Box sx={{
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  border: '1px solid white',
  borderRadius: 2,
  padding: 3,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(0, 0, 0, 0.05)'
}}>
  <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', color: 'white' }}>
    {text}
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
    <Avatar alt={clientName} src={image} sx={{ width: 70, height: 70, mb: 1 }} />
    <Typography variant="body2" sx={{ fontSize: '1rem', color: 'lightgray' }}>
      {clientName}
    </Typography>
  </Box>
</Box>
  );
};

export default Testimonial;