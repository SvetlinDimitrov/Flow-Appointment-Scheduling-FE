import {TableBody, TableCell, TableRow} from "@mui/material";
import {Service} from "../../../../../shared/models/service.types.ts";
import {styled} from "@mui/system";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: '0.875rem',
  fontFamily: 'Arial, sans-serif',
}));

interface ServiceDetailsTableProps {
  service: Service;
}

const UserServiceDetailsTable = ({service}: ServiceDetailsTableProps) => {
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
    </TableBody>
  );
};

export default UserServiceDetailsTable;