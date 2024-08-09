import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Paper, TextField, Typography} from '@mui/material';
import passwordValidation from "../../shared/validation/passwordValidation.ts";
import emailValidation from "../../shared/validation/emailValidation.ts";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {

  };

  return (
    <Paper sx={{
      padding: 7,
      maxWidth: 500,
      borderRadius: 3,
    }} elevation={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
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
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', passwordValidation)}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;