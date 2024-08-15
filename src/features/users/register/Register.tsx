import {SubmitHandler, useForm} from 'react-hook-form';
import {TextField, Typography} from '@mui/material';
import useCreateUserMutation from "../../../hooks/users/mutations/useCreateUserMutation.ts";
import {Link, useNavigate} from "react-router-dom";
import {LinkStyle, MainWrapper, RegisterButton, SecondWrapper} from "./registerStyle.ts";
import {CreateUserRequest} from "../../../models/api/users.ts";
import {emailValidation, nameValidation, passwordValidation} from "../../shared/validation/users.validations.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {

  // @ts-ignore
  const {register, handleSubmit, watch, formState: {errors}} = useForm<IFormInput>({
    resolver: zodResolver(
      z.object({
        email: emailValidation,
        firstName: nameValidation,
        lastName: nameValidation,
        password: passwordValidation,
        confirmPassword: z.string().refine(value => value === watch('password'), 'Passwords do not match')
      }))
  });

  const createUserMutation = useCreateUserMutation();

  const navigate = useNavigate();

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
            {...register('email')}
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
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ''}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('confirmPassword')}
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