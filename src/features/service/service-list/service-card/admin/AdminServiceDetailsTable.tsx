import {TableBody, TableCell, TableRow} from "@mui/material";
import {Service} from "../../../../../shared/models/service.types.ts";
import {styled} from "@mui/system";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: '0.875rem',
  fontFamily: 'Arial, sans-serif',
}));

interface AdminServiceDetailsTableProps {
  service: Service;
}

const AdminServiceDetailsTable = ({service}: AdminServiceDetailsTableProps) => {
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell>Duration</StyledTableCell>
        <StyledTableCell>{service.duration} min</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Price</StyledTableCell>
        <StyledTableCell>{service.price} $</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Place</StyledTableCell>
        <StyledTableCell>{service.workSpace.name}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Availability</StyledTableCell>
        <StyledTableCell>{service.availability ? 'Yes' : 'No'}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Total Profit</StyledTableCell>
        <StyledTableCell>1900 $</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Total Appointments</StyledTableCell>
        <StyledTableCell>190</StyledTableCell>
      </TableRow>
    </TableBody>
  );
};

export default AdminServiceDetailsTable;