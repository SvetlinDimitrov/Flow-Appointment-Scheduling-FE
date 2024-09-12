import {Box, Button, Typography, useTheme} from '@mui/material';
import {ToolbarProps} from 'react-big-calendar';
import {NavigationAction} from "../../../../shared/models/react-big-calendar.ts";

const BookToolbar = ({label, onNavigate}: ToolbarProps) => {
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
          onClick={() => onNavigate(NavigationAction.TODAY)}
        >
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
    </Box>
  );
};

export default BookToolbar;