import {Box, Card, CardContent, Typography} from "@mui/material";
import UserCardActions from "./user/UserCardActions.tsx";
import AdminCardActions from "./admin/AdminCardActions.tsx";
import {User} from "../../../../shared/models/user.types.ts";
import {DateTime} from "luxon";

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
          {employee.staffDetails && <>
            <Typography variant={"subtitle2"} color={'gray'} mt={1}>
              Hours: {DateTime.fromISO(employee.staffDetails.beginWorkingHour.toString()).toFormat('HH:mm')} - {DateTime.fromISO(employee.staffDetails.endWorkingHour.toString()).toFormat('HH:mm')}
            </Typography>
            <Typography variant={"subtitle2"} color={employee.staffDetails.isAvailable ? 'green' : 'red'} mt={1}>
              {employee.staffDetails.isAvailable ? 'Available' : 'Not Available'}
            </Typography>
          </>
          }
        </CardContent>
        {handleDeleteEmployeeFromService ? (
          <AdminCardActions
            onDelete={handleDeleteEmployeeFromService}
          />
        ) : handleBookWithStaff ? (
          <UserCardActions
            bookWithStaff={handleBookWithStaff}
            employeeFirstName={employee.firstName}
            available={employee.staffDetails?.isAvailable || false}
          />
        ) : null}
      </Card>
    </Box>);
};

export default StaffCard;