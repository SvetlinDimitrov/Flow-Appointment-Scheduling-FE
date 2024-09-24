import {Box, Card, CardContent, Divider, IconButton, Menu, MenuItem, MenuItemProps, Typography} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {MouseEvent, useState} from "react";
import {Service} from "../../../shared/models/service.types.ts";
import AdminButtons from "./AdminButtons";
import UserButton from "./UserButton";
import CardBody from "./CardBody";

const StyledMenuItem = (props: MenuItemProps) => {
  return (
    <MenuItem
      sx={{
        "&:hover": {
          color: "primary.main"
        },
      }}
      {...props}
    />
  );
};


interface ServiceCardProps {
  isAdmin: boolean;
  selectedService: Service;
  handleViewEmployees: () => void;
  handleDeleteService?: () => void;
  handleUpdateService?: () => void;
  handleAppointments?: () => void;
}

const ServiceCard = (
  {
    isAdmin,
    selectedService,
    handleViewEmployees,
    handleDeleteService,
    handleUpdateService,
    handleAppointments
  }: ServiceCardProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Card
        sx={{
          width: '350px',
          margin: "auto",
          boxShadow: 3,
          padding: 2,
          borderRadius: 2,
          position: 'relative'
        }}>
        {isAdmin && (
          <IconButton
            onClick={handleClick}
            sx={{position: 'absolute', top: 8, right: 8}}
          >
            <MoreVertIcon/>
          </IconButton>
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <StyledMenuItem
            onClick={() => {
              handleViewEmployees();
              handleClose();
            }}
          >
            Staff
          </StyledMenuItem>
          {isAdmin && handleAppointments && (
            <>
              <StyledMenuItem
                onClick={() => {
                  handleAppointments();
                  handleClose();
                }}
              >
                Events
              </StyledMenuItem>
              <StyledMenuItem
                onClick={() => {
                  console.log(123);
                  handleClose();
                }}
              >
                Statistics
              </StyledMenuItem>
            </>
          )}
        </Menu>
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            noWrap
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {selectedService.name}
          </Typography>
          <Typography
            variant="subtitle2"
            margin="auto"
            textAlign="center"
            color="gray"
            fontStyle="italic"
            marginTop={1}
            noWrap
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {selectedService.description}
          </Typography>
          <Divider sx={{marginY: 2}}/>
          <CardBody selectedService={selectedService} isAdmin={isAdmin}/>
        </CardContent>
        <Divider sx={{marginY: 2}}/>
        <Box display="flex" justifyContent="space-around" padding={2}>
          {isAdmin ? (
            <AdminButtons
              handleUpdateService={handleUpdateService!}
              handleDeleteService={handleDeleteService!}
            />
          ) : (
            <UserButton handleViewEmployees={handleViewEmployees}/>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default ServiceCard;