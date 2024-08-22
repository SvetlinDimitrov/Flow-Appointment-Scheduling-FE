import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {UserAuthContext} from "../../context/UserAuthContext.tsx";
import {styled} from "@mui/system";
import UserMenu from "./user-menu/UserMenu.tsx";
import {paths} from "../../paths/paths.ts";

const HorizontalLinks = styled(Box)(({theme}) => ({
  flexDirection: "row",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const {isUserAuthenticated} = useContext(UserAuthContext)!;

  return (
    <AppBar position={"sticky"}>
      <Toolbar>
        <IconButton
          size={"large"}
          edge={"start"}
          color={"inherit"}
          aria-label={"logo"}
          onClick={() => navigate("/")}
        >
          <AssignmentIcon/>
        </IconButton>
        <Typography variant={"body1"} flexGrow={1}>
          Flow Appointment Scheduling
        </Typography>
        {isUserAuthenticated() ?
          <UserMenu/>
          :
          <HorizontalLinks>
            {paths.guestPaths.map((path, index) => (
              <Button sx={{
                margin: "0 10px",
                color: "inherit"
              }} key={index} onClick={() => navigate(Object.values(path)[0])}>
                {Object.keys(path)[0]}
              </Button>
            ))}
          </HorizontalLinks>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;