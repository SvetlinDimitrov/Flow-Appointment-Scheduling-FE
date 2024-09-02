import {SubmitHandler, useForm} from 'react-hook-form';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, SxProps, TextField} from '@mui/material';
import {User} from "../../../../shared/models/user.types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {nameValidation} from "../../../../shared/validation/users.validations.ts";
import {styled} from "@mui/system";

const mainWrapperStyle: SxProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: 3,
  borderRadius: 2,
};

const StyledDialogTitle = styled(DialogTitle)(({theme}) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: theme.spacing(2),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

interface UpdateUserProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (firstName: string, lastName: string) => void;
  data: User;
}

interface FormInputs {
  firstName: string;
  lastName: string;
}

const UpdateUser = ({ open, onClose, onSubmit , data} : UpdateUserProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
    resolver: zodResolver(
      z.object({
        firstName: nameValidation,
        lastName: nameValidation,
      }))
  });
  const onSubmitForm: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data.firstName, data.lastName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title"
            slotProps={{backdrop: { sx: mainWrapperStyle },}} PaperProps={{
      sx: {
        borderRadius: 3,
      },
    }}>

      <StyledDialogTitle id="form-dialog-title">Update User</StyledDialogTitle>
      <DialogContent sx={{backgroundColor: '#f5f5f5', p: 3}}>
        <Box pt={4}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
            <TextField
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update
              </Button>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;