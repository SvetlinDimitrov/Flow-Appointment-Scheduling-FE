import {Box, Button, Typography, useTheme} from '@mui/material';
import {ToolbarProps} from 'react-big-calendar';
import {NavigationAction, ViewOption} from "../../../../shared/models/react-big-calendar.ts";

const ClientCustomToolbar = ({label, onNavigate, onView, view}: ToolbarProps) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={2}
      gap={2}
      sx={{
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          gap: 1,
        },
      }}
    >
      <Box
        display={'flex'}
        gap={1}
        justifyContent={'center'}
      >
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onNavigate(NavigationAction.TODAY)}>
          Today
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onNavigate(NavigationAction.PREV)}
        >
          Previous
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onNavigate(NavigationAction.NEXT)}
        >
          Next
        </Button>
      </Box>
      <Typography
        variant={'subtitle1'}
        textAlign={'center'}
      >
        {label}
      </Typography>
      <Box
        display={'flex'}
        gap={1}
        justifyContent={'center'}>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onView(ViewOption.DAY)} disabled={view === ViewOption.DAY}
        >
          Day
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onView(ViewOption.WEEK)} disabled={view === ViewOption.WEEK}
        >
          Week
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          onClick={() => onView(ViewOption.MONTH)} disabled={view === ViewOption.MONTH}
        >
          Month
        </Button>
      </Box>
    </Box>
  );
};

export default ClientCustomToolbar;