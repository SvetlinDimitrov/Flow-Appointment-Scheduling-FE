import {SubmitHandler, useForm} from 'react-hook-form';
import {TextField} from '@mui/material';
import useLoginUserMutation from "../../../hooks/users/mutations/useLoginUserMutation.ts";
import {Link, useNavigate} from "react-router-dom";
import {LoginButton, MainWrapper, RegisterLink, SecondWrapper, Title} from "./loginStyles.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {emailValidation, passwordValidation} from "../../shared/validation/users.validations.ts";
import {z} from "zod";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
    resolver: zodResolver(
      z.object({
        email: emailValidation,
        password: passwordValidation,
      }))
  });

  const navigate = useNavigate();

  const userLoginMutation = useLoginUserMutation();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const body: IFormInput = {
      email: data.email,
      password: data.password
    };

    userLoginMutation.mutate(body, {
      onSuccess: () => {
        navigate('/');
      }
    });
  };

  return (
    <MainWrapper>
      <SecondWrapper elevation={4}>
        <Title variant="h4">
          Login
        </Title>
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
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <LoginButton variant="contained" fullWidth type="submit">
            Login
          </LoginButton>
          <RegisterLink variant="body2" align="center">
            Don't have an account? <Link to="/register">Register here</Link>
          </RegisterLink>
        </form>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default Login;