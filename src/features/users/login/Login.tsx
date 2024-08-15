import {SubmitHandler, useForm} from 'react-hook-form';
import {TextField} from '@mui/material';
import passwordValidation from "../../shared/validation/passwordValidation.ts";
import emailValidation from "../../shared/validation/emailValidation.ts";
import useLoginUserMutation from "../../../hooks/users/mutations/useLoginUserMutation.ts";
import {Link, useNavigate} from "react-router-dom";
import {LoginButton, MainWrapper, RegisterLink, SecondWrapper, Title} from "./loginStyles.ts";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

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
            {...register('email', emailValidation)}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
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