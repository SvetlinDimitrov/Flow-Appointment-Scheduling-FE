import {Box, Card, CardContent, Paper, Table, TableContainer, Typography} from "@mui/material";
import UserCardActions from "./user/UserCardActions.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";
import UserServiceDetailsTable from "./user/UserServiceDetailsTable.tsx";
import AdminServiceDetailsTable from "./admin/AdminServiceDetailsTable.tsx";
import {Service} from "../../../shared/models/service.types.ts";

interface ServiceCardProps {
  selectedService: Service;
  handleViewEmployees: () => void;
  handleDeleteService?: () => void;
  handleUpdateService?: () => void;
  handleAppointments?: () => void;
}

/*
  If handleDeleteService and handleUpdateService are defined, then the user is an admin.
  I was not able to put this (handleDeleteService !== undefined && handleUpdateService !== undefined)
  in function or in a const because typescript stills complains about the type that it can be undefined.
*/
const ServiceCard = (
  {
    selectedService,
    handleViewEmployees,
    handleDeleteService,
    handleUpdateService,
    handleAppointments
  }: ServiceCardProps) => {

  const isAdmin = handleDeleteService !== undefined &&
    handleUpdateService !== undefined &&
    handleAppointments !== undefined;

  return (
    <Box>
      <Card sx={{width: '100%', margin: "auto", boxShadow: 3}}>
        <CardContent>
          <Typography variant={"h5"} fontWeight={'bold'} textAlign={'center'}>
            {selectedService.name}
          </Typography>
          <Typography
            variant={"subtitle2"}
            maxWidth={300}
            margin={"auto"}
            textAlign={"center"}
            color={"gray"}
            fontStyle={"italic"}
            marginTop={1}
          >
            {selectedService.description}
          </Typography>
          <TableContainer component={Paper} sx={{marginTop: 2}}>
            <Table>
              {isAdmin ? (
                <AdminServiceDetailsTable service={selectedService}/>
              ) : (
                <UserServiceDetailsTable service={selectedService}/>
              )}
            </Table>
          </TableContainer>
        </CardContent>
        {isAdmin ? (
          <AdminCardActions
            handleDelete={handleDeleteService}
            handleEdit={handleUpdateService}
            handleOpen={handleViewEmployees}
            handleAppointments={handleAppointments}
          />
        ) : (
          <UserCardActions handleOpen={handleViewEmployees}/>
        )}
      </Card>
    </Box>
  );
};

export default ServiceCard;