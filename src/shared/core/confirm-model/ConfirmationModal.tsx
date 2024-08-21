import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme} from '@mui/material';

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({open, title, message, onConfirm, onCancel}: ConfirmationModalProps) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      PaperProps={{
        sx: {
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          borderRadius: theme.shape.borderRadius,
          zIndex: 1000,
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <DialogTitle id="confirmation-dialog-title" sx={{color: theme.palette.primary.main}}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirmation-dialog-description" sx={{color: theme.palette.text.primary}}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;