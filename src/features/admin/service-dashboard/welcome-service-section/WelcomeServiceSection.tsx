import { Box, Button, Typography } from "@mui/material";

const WelcomeServiceSection = ({ onCreateService }: { onCreateService: () => void }) => {
  return (
    <Box textAlign={'center'} mt={4} p={2} display={'flex'}
         flexDirection={'column'} justifyContent={'center'} gap={2}>
      <Typography variant="h4">
        Welcome, Admin!
      </Typography>
      <Typography variant="h6">
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