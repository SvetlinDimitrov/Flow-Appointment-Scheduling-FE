import {TableBody, TableCell, TableRow} from "@mui/material";
import {Service} from "../../../../shared/models/service.types.ts";
import {styled} from "@mui/system";
import {Duration} from "luxon";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlaceIcon from '@mui/icons-material/Place';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  fontSize: '0.875rem',
  fontFamily: 'Arial, sans-serif',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
}));

interface AdminServiceDetailsTableProps {
  service: Service;
}

const AdminServiceDetailsTable = ({service}: AdminServiceDetailsTableProps) => {
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell><AccessTimeIcon/></StyledTableCell>
        <StyledTableCell>{Duration.fromISO(service.duration).as('minutes')} min</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell><AttachMoneyIcon/></StyledTableCell>
        <StyledTableCell>{service.price} $</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell><PlaceIcon/></StyledTableCell>
        <StyledTableCell>{service.workSpace.name}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>{service.availability ? <CheckCircleIcon/> : <CancelIcon/>}</StyledTableCell>
        <StyledTableCell>{service.availability ? 'Yes' : 'No'}</StyledTableCell>
      </TableRow>
    </TableBody>
  );
};

export default AdminServiceDetailsTable;