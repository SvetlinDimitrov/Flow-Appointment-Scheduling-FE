import {Box, DialogContent, DialogTitle, SxProps} from '@mui/material';
import {styled} from "@mui/system";

export const mainWrapperStyle: SxProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: 3,
  borderRadius: 2,
};

export const StyledDialogTitle = styled(DialogTitle)(({theme}) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: theme.spacing(2),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

export const StyledDialogContent = styled(DialogContent)(({theme}) => ({
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f5',
}));

export const StyleBox = styled(Box)(({theme}) => ({
  paddingTop: theme.spacing(4),
}));