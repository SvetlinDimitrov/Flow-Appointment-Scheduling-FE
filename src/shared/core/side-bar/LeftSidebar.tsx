import {useContext, useState} from 'react';
import {Box, Drawer, IconButton, Typography, useTheme} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {UserAuthContext} from "../../context/UserAuthContext.tsx";
import {paths} from "../../paths/paths.ts";
import ConfirmationModal from "../confirm-model/ConfirmationModal.tsx";
import {UserRole} from "../../models/user.types.ts";

const LeftSidebar = () => {
  const {logout, isUserAuthenticated, role} = useContext(UserAuthContext)!;
  const location = useLocation();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setConfirmModalOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setConfirmModalOpen(false);
    toggleDrawer();
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
                color={isActive(Object.values(path)[0]) ? 'secondary' : 'primary'}
                variant="body1"
              >
                {Object.keys(path)[0]}
              </Typography>
            </Link>
          ))}
          {role === UserRole.ADMINISTRATOR && (
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
                    color={isActive(Object.values(path)[0]) ? 'secondary' : 'primary'}
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
            onClick={handleLogout}
          >
            Logout
          </Typography>
        </Box>
      </Drawer>
      <ConfirmationModal
        open={isConfirmModalOpen}
        title="Logout"
        message="Are you sure you want to logout?"
        onConfirm={handleConfirmLogout}
        onCancel={() => setConfirmModalOpen(false)}
      />
    </Box>
  );
};

export default LeftSidebar;