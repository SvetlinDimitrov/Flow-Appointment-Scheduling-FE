import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import nameValidation from "../../../shared/validation/nameValidation.ts";

interface UpdateUserProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (firstName: string, lastName: string) => void;
}

interface FormInputs {
  firstName: string;
  lastName: string;
}

const UpdateUser: React.FC<UpdateUserProps> = ({open, onClose, onSubmit}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();

  const onSubmitForm: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data.firstName, data.lastName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" slotProps={{
      backdrop: {sx: {backgroundColor: 'rgba(0, 0, 0, 0.8)',},},
    }}>
      <DialogTitle id="form-dialog-title">Update User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;