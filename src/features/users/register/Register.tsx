import {SubmitHandler, useForm} from 'react-hook-form';
import {TextField, Typography} from '@mui/material';
import emailValidation from '../../shared/validation/emailValidation';
import passwordValidation from '../../shared/validation/passwordValidation';
import useCreateUserMutation from "../../../hooks/users/mutations/useCreateUserMutation.ts";
import {Link, useNavigate} from "react-router-dom";
import nameValidation from "../../shared/validation/nameValidation.ts";
import confirmPasswordValidation from "../../shared/validation/confirmPasswordValidation.ts";
import {LinkStyle, MainWrapper, RegisterButton, SecondWrapper} from "./registerStyle.ts";
import {CreateUserRequest} from "../../../models/api/users.ts";

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
    const body: CreateUserRequest = {
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
    <MainWrapper>
      <SecondWrapper elevation={4}>
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
            {...register('firstName', nameValidation)}
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
          <RegisterButton variant="contained" color="primary" type="submit">
            Register
          </RegisterButton>
          <LinkStyle variant="body2" align="center">
            Already have an account? <Link to="/login">Login here</Link>
          </LinkStyle>
        </form>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default Register;