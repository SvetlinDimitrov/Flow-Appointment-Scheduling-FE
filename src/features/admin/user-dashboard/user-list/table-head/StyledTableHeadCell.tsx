import {Box, IconButton, TableCell} from '@mui/material';
import {styled} from '@mui/system';
import {ReactElement} from "react";

const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 'bold',
}));

interface StyledTableCellProps {
  column: string;
  handleSort: () => void;
  renderSortIcon: (column: string) => ReactElement;
}

const SortableTableCell = ({column, handleSort, renderSortIcon}: StyledTableCellProps) => (
  <StyledTableCell>
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
      {column}
      <IconButton size={'small'} onClick={handleSort}>
        {renderSortIcon(column)}
      </IconButton>
    </Box>
  </StyledTableCell>
);

export default SortableTableCell;