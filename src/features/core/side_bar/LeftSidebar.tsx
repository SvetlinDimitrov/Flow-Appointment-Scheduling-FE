import {useContext, useState} from 'react';
import {Box, Drawer, IconButton, Typography, useTheme} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import {paths} from "../../shared/paths/paths.ts";

const LeftSidebar = () => {
  const {logout, isUserAuthenticated, isAdmin} = useContext(UserAuthContext)!;
  const location = useLocation();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const activeColor = theme.palette.secondary.main;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (!isUserAuthenticated()) return null;

  return (
    <Box>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          left: 0,
          top: '50%',
          height: '50px',
          width: '50px',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark
          }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            borderBottomRightRadius: '20px',
            borderTopRightRadius: '20px',
            top: '120px',
            bottom: '120px',
            height: 'auto'
          }
        }}
      >
        <Box width={'140px'} p={2} display={'flex'} flexDirection={'column'} gap={2}>
          <Typography variant="h6" component="h6" fontWeight={'bold'}>Sidebar</Typography>
          {paths.userPaths.map((path, index) => (
            <Link
              style={{textDecoration: 'none', color: 'blue'}}
              key={index}
              to={Object.values(path)[0]}
              onClick={toggleDrawer}
            >
              <Typography
                fontFamily={theme.typography.fontFamily}
                fontSize={theme.typography.body1.fontSize}
                fontWeight={'bolder'}
                color={isActive(Object.values(path)[0]) ? activeColor : theme.palette.primary.main}
                variant="body1"
              >
                {Object.keys(path)[0]}
              </Typography>
            </Link>
          ))}
          {isAdmin && (
            <Box width={'140px'} display={'flex'} flexDirection={'column'} gap={2}>
              <Typography variant="h6" component="h6" fontWeight={'bold'}>Admin Panel</Typography>
              {paths.adminPaths.map((path, index) => (
                <Link
                  style={{textDecoration: 'none', color: 'blue'}}
                  key={index}
                  to={Object.values(path)[0]}
                  onClick={toggleDrawer}
                >
                  <Typography
                    fontFamily={theme.typography.fontFamily}
                    fontSize={theme.typography.body1.fontSize}
                    fontWeight={'bolder'}
                    color={isActive(Object.values(path)[0]) ? activeColor : theme.palette.primary.main}
                    variant="body1"
                  >
                    {Object.keys(path)[0]}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
          <Typography
            variant="body1"
            fontFamily={theme.typography.fontFamily}
            fontSize={theme.typography.body1.fontSize}
            fontWeight={'bolder'}
            sx={{cursor: 'pointer', color: theme.palette.primary.main}}
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                logout();
                toggleDrawer();
              }
            }}
          >
            Logout
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default LeftSidebar;