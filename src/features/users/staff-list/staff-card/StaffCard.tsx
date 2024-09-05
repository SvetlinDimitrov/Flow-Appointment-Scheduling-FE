import {Box, Card, CardContent, Typography} from "@mui/material";
import UserCardActions from "./user/UserCardActions.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";
import {User} from "../../../../shared/models/user.types.ts";

export interface StaffCardProps {
  employee: User;
  handleDeleteEmployeeFromService: (() => void) | undefined;
  handleBookWithStaff: (() => void) | undefined;
}

const StaffCard = (props: StaffCardProps) => {
  const {handleDeleteEmployeeFromService, handleBookWithStaff} = props;

  const {employee} = props;

  return (
    <Box>
      <Card>
        <CardContent sx={{maxWidth: '250px'}}>
          <Box
            component="img"
            src="/static/images/no-picture-found.jpg"
            alt={`${employee.firstName} ${employee.lastName}`}
            width={'100%'}
            height={'150px'}
            mb={2}
            sx={{objectFit: 'cover'}}
          />
          <Typography variant={"h6"} fontWeight={'bold'}>
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant={"subtitle2"} color={'gray'} mt={1}>
            {employee.email}
          </Typography>
        </CardContent>
        {handleDeleteEmployeeFromService ? (
          <AdminCardActions
            onDelete={handleDeleteEmployeeFromService}
          />
        ) : handleBookWithStaff ? (
          <UserCardActions
            bookWithStaff={handleBookWithStaff}
            employeeFirstName={employee.firstName}
          />
        ) : null}
      </Card>
    </Box>);
};

export default StaffCard;