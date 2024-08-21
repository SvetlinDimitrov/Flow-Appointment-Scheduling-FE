import {ReactNode} from 'react';
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";

const UserInfoItemWrapper = styled(Box)(({theme}) => ({
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

interface UserInfoItemProps {
  label: string;
  value: ReactNode;
}

const UserInfoItem = ({label, value}: UserInfoItemProps) => {
  return (
    <UserInfoItemWrapper>
      <Typography variant="body1" fontWeight={'bold'} mr={2}>
        {label}
      </Typography>
      <Typography variant="body2">
        {value}
      </Typography>
    </UserInfoItemWrapper>
  );
};

export default UserInfoItem;