import {TableBody, TableCell, TableRow} from '@mui/material';
import {User} from '../../../../../shared/models/user.types.ts';
import UserActions from './UserActions.tsx';
import {DateTime} from "luxon";
import {styled} from "@mui/system";

const CenteredTableCell = styled(TableCell)({
  textAlign: 'center',
  padding: 8
});

interface TableBodyUsersProps {
  data: User[];
  userId: number | null;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAssignToService: (user: User) => void;
}

const experienceYears = (startDate: string) => {
  const startYear = new Date(startDate).getFullYear();
  const currentYear = new Date().getFullYear();
  return (currentYear - startYear).toString();
};

const TableBodyUsers = ({data, userId, onEdit, onDelete, onAssignToService}: TableBodyUsersProps) => {
  return (
    <TableBody>
      {data.map((user) => (
        <TableRow key={user.id}>
          <CenteredTableCell >{user.firstName}</CenteredTableCell>
          <CenteredTableCell>{user.lastName}</CenteredTableCell>
          <CenteredTableCell>{user.email}</CenteredTableCell>
          {user.staffDetails && (
            <>
              <CenteredTableCell>{user.staffDetails.salary}</CenteredTableCell>
              <CenteredTableCell>{user.staffDetails.profit}</CenteredTableCell>
              <CenteredTableCell>{user.staffDetails.completedAppointments}</CenteredTableCell>
              <CenteredTableCell>{experienceYears(user.staffDetails.startDate.toString())}</CenteredTableCell>
              <CenteredTableCell>{DateTime.fromISO(user.staffDetails.beginWorkingHour.toString()).toFormat('HH:mm')}</CenteredTableCell>
              <CenteredTableCell>{DateTime.fromISO(user.staffDetails.endWorkingHour.toString()).toFormat('HH:mm')}</CenteredTableCell>
            </>
          )}
          <TableCell sx={{padding: 1}}>
            {userId && user.id !== userId && (
              <UserActions
                userRole={user.role}
                onEdit={() => onEdit(user)}
                onDelete={() => onDelete(user)}
                onAssignToService={() => onAssignToService(user)}
              />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyUsers;