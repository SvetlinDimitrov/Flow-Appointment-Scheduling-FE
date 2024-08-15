import {Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactNode, useState} from 'react';
import {StyledButton} from "./sandwitchStyles.ts";

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
      <StyledButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </StyledButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Sandwich;