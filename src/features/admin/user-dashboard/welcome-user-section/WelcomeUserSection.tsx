import {Box, Button, Typography} from '@mui/material';

interface WelcomeUserSectionProps {
  onHireStaff: () => void;
}

const WelcomeUserSection = ({ onHireStaff } : WelcomeUserSectionProps) => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center" gap={2}
         pl={4} pr={4}>
      <Typography variant="h2" textAlign="center">
        Welcome, Admin!
      </Typography>
      <Typography variant="h5" textAlign="center">
        Ready to expand your team? Hire a new staff member now.
      </Typography>
      <Button variant="contained" color="primary" onClick={onHireStaff}>
        Hire Staff Member
      </Button>
    </Box>
  );
};

export default WelcomeUserSection;