import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import nameValidation from "../../../shared/validation/nameValidation.ts";
import {dialogContentStyle, dialogTitleStyle, mainWrapperStyle} from "./updateUserStyles.ts";
import User from "../../../../models/users/User.ts";

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

const UpdateUser: React.FC<UpdateUserProps> = ({ open, onClose, onSubmit , data}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    }
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

      <DialogTitle id="form-dialog-title" sx={dialogTitleStyle}>Update User</DialogTitle>
      <DialogContent sx={dialogContentStyle}>
        <Box sx={{pt: 4}}>
        <form onSubmit={handleSubmit(onSubmitForm)} >
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            {...register('firstName', nameValidation)}
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ''}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            {...register('lastName', nameValidation)}
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