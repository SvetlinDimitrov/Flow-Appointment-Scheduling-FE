import {TableCell, TableHead, TableRow} from '@mui/material';
import {UserRole} from "../../../../../shared/models/user.types.ts";
import SortableTableCell from "./StyledTableHeadCell.tsx";
import {ReactElement} from "react";

interface TableHeadUsersProps {
  userRole?: UserRole;
  handleSort: (column: string, realName: string) => void;
  renderSortIcon: (column: string) => ReactElement;
}

const TableHeadUsers = ({userRole, handleSort, renderSortIcon}: TableHeadUsersProps) => (
  <TableHead sx={{position: 'sticky', top: 55, zIndex: 1, backgroundColor: 'white'}}>
    <TableRow>
      <SortableTableCell column="Forename"
                         handleSort={() => handleSort("Forename", "firstName")} renderSortIcon={renderSortIcon}/>
      <SortableTableCell column="Surname"
                         handleSort={() => handleSort("Surname", "lastName")} renderSortIcon={renderSortIcon}/>
      <SortableTableCell column="Email"
                         handleSort={() => handleSort("Email", "email")} renderSortIcon={renderSortIcon}/>
      {(userRole === UserRole.ADMINISTRATOR || userRole === UserRole.EMPLOYEE) && (
        <>
          <SortableTableCell column="Salary"
                             handleSort={() => handleSort("Salary", "staffDetails.salary")}
                             renderSortIcon={renderSortIcon}/>
          <SortableTableCell column="Profit"
                             handleSort={() => handleSort("Profit", "staffDetails.profit")}
                             renderSortIcon={renderSortIcon}/>
          <SortableTableCell column="Appointments"
                             handleSort={() => handleSort("Appointments", "staffDetails.completedAppointments")}
                             renderSortIcon={renderSortIcon}/>
          <SortableTableCell column="Years"
                             handleSort={() => handleSort("Years", "staffDetails.startDate")}
                             renderSortIcon={renderSortIcon}/>
          <SortableTableCell column="Start"
                             handleSort={() => handleSort("Start", "staffDetails.beginWorkingHour")}
                             renderSortIcon={renderSortIcon}/>
          <SortableTableCell column="End"
                             handleSort={() => handleSort("End", "staffDetails.endWorkingHour")}
                             renderSortIcon={renderSortIcon}/>
        </>
      )}
      <TableCell sx={{fontWeight: 'bold' , padding: 1}}>Operations</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeadUsers;