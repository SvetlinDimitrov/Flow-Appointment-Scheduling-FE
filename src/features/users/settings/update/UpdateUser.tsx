import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Dialog, DialogActions, TextField} from '@mui/material';
import {mainWrapperStyle, StyleBox, StyledDialogContent, StyledDialogTitle} from "./updateUserStyles.ts";
import {User} from "../../../../models/user.types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {nameValidation} from "../../../shared/validation/users.validations.ts";

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
      <StyledDialogContent>
        <StyleBox>
        <form onSubmit={handleSubmit(onSubmitForm)} >
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
        </StyleBox>
      </StyledDialogContent>
    </Dialog>
  );
};

export default UpdateUser;