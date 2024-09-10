import {Box, Button, Typography} from '@mui/material';
import {ToolbarProps} from 'react-big-calendar';

const BookToolbar = ({label, onNavigate}: ToolbarProps) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={2} gap={2}
         sx={{
           '@media (max-width: 600px)': {
             flexDirection: 'column',
             gap: 1,
           },
         }}>
      <Box display={'flex'} gap={1} justifyContent={'center'}>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onNavigate('TODAY')}>Today
        </Button>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onNavigate('PREV')}>Previous</Button>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onNavigate('NEXT')}>Next</Button>
      </Box>
      <Typography variant={'subtitle1'} textAlign={'center'}>
        {label}
      </Typography>
    </Box>
  );
};

export default BookToolbar;