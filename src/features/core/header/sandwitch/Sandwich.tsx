import {Button, Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactNode, useState} from 'react';
import {styled} from "@mui/system";

const StyledButton = styled(Button)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  color: 'inherit'
}));

interface SandwichProps {
  menuItems: ReactNode;
}

const Sandwich = ({menuItems}: SandwichProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <StyledButton onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </StyledButton>
      <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Sandwich;