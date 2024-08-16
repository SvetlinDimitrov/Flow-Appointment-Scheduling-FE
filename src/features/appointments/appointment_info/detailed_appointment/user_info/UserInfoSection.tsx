import {Box, Typography} from '@mui/material';
import {User} from "../../../../../models/user.types.ts";

interface UserInfoSectionProps {
  user: User;
}

const UserInfoSection = ({user}: UserInfoSectionProps) => {
  return (
    <Box height={'50%'} display={'flex'} width={'100%'}
         alignItems={'center'} border={'1px solid black'}
         justifyContent={'center'}>
      <Box width={'30%'} height={'80%'} bgcolor={'gray'} mr={3}/>
      <Box>
        <Typography variant="h6">Name: {user.firstName} {user.lastName}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
      </Box>
    </Box>
  );
};

export default UserInfoSection;