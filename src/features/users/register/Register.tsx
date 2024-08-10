import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Paper, TextField, Typography} from '@mui/material';
import emailValidation from '../../shared/validation/emailValidation';
import passwordValidation from '../../shared/validation/passwordValidation';
import CreateUser from "../../../models/users/CreateUser.ts";
import useCreateUserMutation from "../../../hooks/users/mutations/useCreateUserMutation.ts";
import {useNavigate} from "react-router-dom";
import nameValidation from "../../shared/validation/nameValidation.ts";
import confirmPasswordValidation from "../../shared/validation/confirmPasswordValidation.ts";
import {paperStyles} from "./registerStyle.ts";

interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<IFormInput>();

  const createUserMutation = useCreateUserMutation();

  const navigate = useNavigate();

  const password = watch('password');

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const body: CreateUser = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password
    };

    createUserMutation.mutate(body, {
      onSuccess: () => {
        navigate('/login');
      }
    });
  };

  return (
    <Paper sx={paperStyles} elevation={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          {...register('email', emailValidation)}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          label="First Name"
          type="text"
          fullWidth
          margin="normal"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ''}
        />
        <TextField
          label="Last Name"
          type="text"
          fullWidth
          margin="normal"
          {...register('lastName', nameValidation)}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ''}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', passwordValidation)}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('confirmPassword', confirmPasswordValidation(password))}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;