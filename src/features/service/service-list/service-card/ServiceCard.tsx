import {Box, Card, CardContent, Paper, Table, TableContainer, Typography} from "@mui/material";
import UserCardActions from "./user/UserCardActions.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";
import UserServiceDetailsTable from "./user/UserServiceDetailsTable.tsx";
import AdminServiceDetailsTable from "./admin/AdminServiceDetailsTable.tsx";
import {AdminServiceProps, ServiceProps, ServiceWithUsers} from "../../../../shared/models/service.types.ts";
import {ReactNode} from "react";

interface ServiceCardProps {
  selectedService: ServiceWithUsers;
  serviceContextProps: ServiceProps;
}

function isAdminServiceProps(props: ServiceProps | AdminServiceProps): props is AdminServiceProps {
  return 'handleDeleteService' in props && 'handleUpdateService' in props;
}

const renderCardContent = (selectedService: ServiceWithUsers, table: ReactNode, actions: ReactNode) => (
  <Box>
    <Card sx={{maxWidth: 345, margin: "auto", boxShadow: 3}}>
      <CardContent>
        <Typography variant={"h6"} fontWeight={'bold'} textAlign={'center'}>
          {selectedService.name}
        </Typography>
        <Typography
          variant={"body2"} maxWidth={300} margin={"auto"} textAlign={"center"}
          color={"gray"} fontStyle={"italic"} marginTop={1}
        >
          {selectedService.description}
        </Typography>
        <TableContainer component={Paper} sx={{marginTop: 2}}>
          <Table>
            {table}
          </Table>
        </TableContainer>
      </CardContent>
      {actions}
    </Card>
  </Box>
);

const ServiceCard = ({selectedService, serviceContextProps}: ServiceCardProps) => {
  if (isAdminServiceProps(serviceContextProps)) {
    const {handleDeleteService, handleUpdateService, handleViewEmployees} =
      serviceContextProps as AdminServiceProps;
    return renderCardContent(
      selectedService,
      <AdminServiceDetailsTable service={selectedService}/>,
      <AdminCardActions handleDelete={handleDeleteService}
                        handleEdit={handleUpdateService}
                        handleOpen={handleViewEmployees}/>
    );
  } else {
    const {handleViewEmployees} = serviceContextProps;
    return renderCardContent(
      selectedService,
      <UserServiceDetailsTable service={selectedService}/>,
      <UserCardActions handleOpen={handleViewEmployees}/>
    );
  }
};

export default ServiceCard;