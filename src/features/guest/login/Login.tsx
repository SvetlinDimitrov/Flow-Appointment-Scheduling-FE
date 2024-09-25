import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, TextField, Typography} from '@mui/material';
import useLoginUserMutation from "../../../hooks/users/mutations/useLoginUserMutation.ts";
import {Link, useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {emailValidation, passwordValidation} from "../../../shared/validation/users.validations.ts";
import {z} from "zod";
import {UserMainWrapper, UserSecondWrapper} from "../../../shared/styles/wrappers.ts";
import useProcessing from "../../../hooks/custom/useProcessing.ts";
import FullScreenLoader from "../../../shared/core/loading/full-screen-loader/FullScreenLoader.tsx";

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
  const {processing, startProcessing, stopProcessing} = useProcessing();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const body: IFormInput = {
      email: data.email,
      password: data.password
    };
    startProcessing();
    userLoginMutation.mutate(body, {
      onSuccess: () => navigate('/'),
      onSettled: () => stopProcessing()
    });
  };

  return (
    <>
      <FullScreenLoader isLoading={processing}/>
      <UserMainWrapper>
        <UserSecondWrapper elevation={4}>
          <Typography mb={'2'} variant="h4">
            Login
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
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
            <Button variant="contained" fullWidth
                    sx={{mt: 2, mb: 1}}
                    type="submit">
              Login
            </Button>
            <Typography mt={2} textAlign={'center'} variant="body2" align="center">
              Don't have an account? <Link to="/register">Register here</Link>
            </Typography>
          </form>
        </UserSecondWrapper>
      </UserMainWrapper>
    </>
  );
};

export default Login;