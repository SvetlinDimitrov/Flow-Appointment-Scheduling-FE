import {Box, Card, CardContent, Typography} from "@mui/material";
import {ServiceWithUsers} from "../../../../models/service.types.ts";
import UserCardActions from "./user/UserCardActions.tsx";
import {useServiceContext} from "../../context/ServiceContext.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";

interface EmployeeCardProps {
  employee: ServiceWithUsers["employees"][0];
  selectedServiceId: number;
  visualizeAdminBoard: boolean;
}

const EmployeeCard = ({employee, selectedServiceId, visualizeAdminBoard}: EmployeeCardProps) => {

  const {handleDeleteEmployeeFromService} = useServiceContext();

  return (
    <Box key={employee.id}>
      <Card>
        <CardContent sx={{maxWidth:'250px'}}>
          <Typography variant={"h6"} fontWeight={'bold'}>
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant={"body2"} color={'gray'} mt={1}>
            {employee.email}
          </Typography>
          <Typography variant={"body2"} color={'gray'} mt={1}>
            {employee.role}
          </Typography>
        </CardContent>
        {visualizeAdminBoard ? (
          <AdminCardActions
            employeeEmail={employee.email}
            selectedServiceId={selectedServiceId}
            onDelete={handleDeleteEmployeeFromService}
          />
        ) : (
          <UserCardActions
            selectedServiceId={selectedServiceId}
            employeeId={employee.id}
            employeeFirstName={employee.firstName}
          />
        )}
      </Card>
    </Box>
  );
};

export default EmployeeCard;