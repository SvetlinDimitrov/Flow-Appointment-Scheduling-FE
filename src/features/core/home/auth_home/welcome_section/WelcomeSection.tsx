import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {User} from "../../../../../models/user.types.ts";

interface WelcomeSectionProps {
  user: User;
}

const WelcomeSection = ({user}: WelcomeSectionProps) => {
  const navigate = useNavigate();

  return (
    <Box textAlign={'center'} p={4} bgcolor={'#f5f5f5'}>
      <Typography variant="h3" fontWeight="bold" color="primary">
        Welcome Back, {user.firstName}!
      </Typography>
      <Typography variant="h6" color="textSecondary" mt={2}>
        Manage Your Profile and Explore Our Services
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={2}>
        Use the buttons below to quickly access your appointments or update your profile settings.
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary"
                onClick={() => navigate("/appointments")} sx={{marginRight: 2}}>
          My Appointments
        </Button>
        <Button variant="outlined" color="primary"
                onClick={() => navigate("/profile")}>
          Profile
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeSection;