import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {UserAuthContext} from "../../context/UserAuthContext.tsx";
import UserMenu from "./user-menu/UserMenu.tsx";
import {paths} from "../../paths/paths.ts";

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
        <Typography variant={"subtitle1"} flexGrow={1}>
          Flow Appointment Scheduling
        </Typography>
        {isUserAuthenticated() ?
          <UserMenu/>
          :
          <Box display={'flex'} gap={2}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            gap: {
              xs: 0,
              sm: 2
            }
          }}>
            {paths.guestPaths.map((path, index) => (
              <Typography
                variant={"subtitle1"}
                sx={{
                  color: "inherit",
                  cursor: "pointer"
                }}
                key={index}
                onClick={() => navigate(Object.values(path)[0])}
              >
                {Object.keys(path)[0]}
              </Typography>
            ))}
          </Box>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;