import React, {useContext, useState} from "react";
import {IconButton, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {paths} from "../../../paths/paths.ts";
import {UserAuthContext} from "../../../context/UserAuthContext.tsx";

const UserMenu = () => {
  const navigate = useNavigate();

  const {logout} = useContext(UserAuthContext)!;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size={"large"} edge={"end"} aria-label={"account of current user"}
        aria-controls={"menu-appbar"} aria-haspopup={"true"}
        onClick={handleMenu} color={"inherit"}
      >
        <AccountCircleIcon/>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {paths.userPaths.map((path, index) => (
          <MenuItem key={index} onClick={() => {
            navigate(Object.values(path)[0]);
            handleClose();
          }}>
            {Object.keys(path)[0]}
          </MenuItem>
        ))}
        <MenuItem onClick={() => {
          if (window.confirm("Are you sure you want to logout?")) {
            logout();
            handleClose();
          }
        }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;