import {Box, Button, Typography, useTheme} from '@mui/material';
import {styled} from '@mui/system';
import {Link, useLocation} from 'react-router-dom';
import {useContext} from "react";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import {paths} from "../../shared/paths/paths.ts";

const Sidebar = styled(Box)(({theme}) => ({
  position: 'absolute',
  left: 0,
  top: '100px',
  bottom: '100px',
  width: '120px',
  padding: theme.spacing(2),
  zIndex: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(1),
  backgroundColor: '#eeeeee',
}));

const StyledButton = styled(Button)(() => ({
  textDecoration: 'none',
  color: 'blue',
  padding: 0,
  minWidth: 'auto',
  background: 'none',
  textTransform: 'none',
  '&:hover': {
    background: 'none',
  },
}));

const LeftSidebar = () => {
  const {logout} = useContext(UserAuthContext)!;
  const location = useLocation();
  const theme = useTheme();
  const isActive = (path: string) => location.pathname === path;
  const activeColor = '#800080';

  const isUserPathActive = paths.userPaths.some(path => location.pathname === Object.values(path)[0]);

  if (!isUserPathActive) return null;

  return (
    <Sidebar sx={{
      display: {
        lg: 'flex',
        xs: 'none',
      },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>
      <Typography variant="h6" component="h6" fontWeight={'bold'}>Sidebar</Typography>
      {paths.userPaths.map((path, index) => (
        <Link style={{textDecoration: 'none', color: 'blue'}}
              key={index} to={Object.values(path)[0]}>
          <Typography fontFamily={theme.typography.fontFamily}
                      fontSize={theme.typography.body1.fontSize}
                      fontWeight={'bolder'}
                      color={isActive(Object.values(path)[0]) ? activeColor : 'blue'}
                      variant="body1">
            {Object.keys(path)[0]}
          </Typography>
        </Link>
      ))}
      <StyledButton onClick={() => {
        if (window.confirm("Are you sure you want to logout?")) logout();
      }}>
        <Typography variant="body1"
                    fontFamily={theme.typography.fontFamily}
                    fontSize={theme.typography.body1.fontSize}
                    fontWeight={'bolder'}
        >Logout
        </Typography>
      </StyledButton>
    </Sidebar>
  );
};

export default LeftSidebar;