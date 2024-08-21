import {Box, Card, CardContent, Typography} from "@mui/material";
import UserCardActions from "./user/UserCardActions.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";
import {AdminStaffCardProps, StaffCardProps, UserStaffCardProps} from "../../../../shared/models/user.types.ts";

function isAdminStaffCardProps(props: StaffCardProps): props is AdminStaffCardProps {
  return (props as AdminStaffCardProps).handleDeleteEmployeeFromService !== undefined;
}

function isUserStaffCardProps(props: StaffCardProps): props is UserStaffCardProps {
  return (props as UserStaffCardProps).handleBookWithStaff !== undefined;
}

const StaffCard = (props: StaffCardProps) => {

  const {employee} = props;

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
        {isAdminStaffCardProps(props) ? (
          <AdminCardActions
            onDelete={props.handleDeleteEmployeeFromService}
          />
        ) : isUserStaffCardProps(props) ? (
          <UserCardActions
            bookWithStaff={props.handleBookWithStaff}
            employeeFirstName={employee.firstName}
          />
        ) : null}
      </Card>
    </Box>
  );
};

export default StaffCard;