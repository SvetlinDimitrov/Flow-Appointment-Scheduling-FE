import {Box, Button, Typography} from "@mui/material";

interface WelcomeServiceSectionProps {
  onCreateService: () => void;
}

const WelcomeServiceSection = ({onCreateService}: WelcomeServiceSectionProps) => {
  return (
    <Box textAlign={'center'} mt={4} p={2} display={'flex'}
         flexDirection={'column'} justifyContent={'center'} gap={2}>
      <Typography variant="h2">
        Welcome, Admin!
      </Typography>
      <Typography variant="h5">
        Manage your services efficiently and effectively.
      </Typography>
      <Button variant="contained" color="primary" sx={{
        maxWidth: '200px',
        margin: 'auto',
      }} onClick={onCreateService}>
        Create New Service
      </Button>
    </Box>
  );
};

export default WelcomeServiceSection;