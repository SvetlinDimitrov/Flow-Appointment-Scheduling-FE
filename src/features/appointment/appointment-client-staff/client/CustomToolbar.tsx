import {Box, Button, Typography} from '@mui/material';
import {ToolbarProps} from 'react-big-calendar';

const CustomToolbar = ({label, onNavigate, onView, view}: ToolbarProps) => {
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
      <Box display={'flex'} gap={1} justifyContent={'center'}>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onView('day')} disabled={view === 'day'}>Day</Button>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onView('week')} disabled={view === 'week'}>Week</Button>
        <Button variant={'outlined'} color={'primary'} size={'small'}
                onClick={() => onView('month')} disabled={view === 'month'}>Month</Button>
      </Box>
    </Box>
  );
};

export default CustomToolbar;