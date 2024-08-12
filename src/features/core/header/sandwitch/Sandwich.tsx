import {Drawer, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactNode, useState} from 'react';
import {buttonStyles} from "./sandwitchStyles.ts";

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
      <IconButton sx={buttonStyles} color="inherit" edge="end" onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Sandwich;