import {Box, Button, Modal, Stack, TextField, Typography} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {passwordValidation} from "../../../shared/validation/users.validations.ts";

interface PasswordResetModalProps {
  open: boolean;
  onClose: () => void;
}

interface PasswordResetInputs {
  newPassword: string;
  confirmPassword: string;
}

const passwordSchema = z.object({
  newPassword: passwordValidation,
  confirmPassword: passwordValidation,
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const PasswordResetModal = ({open, onClose}: PasswordResetModalProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<PasswordResetInputs>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit: SubmitHandler<PasswordResetInputs> = (data) => {
    //TODO:: Implement password reset
    console.log(data);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        minWidth: 300,
        overflowX: 'auto',
        margin: 2,
      }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          minWidth: 250,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="New Password"
              type="password"
              {...register('newPassword')}
              error={!!errors.newPassword}
              helperText={errors.newPassword ? errors.newPassword.message : ''}
            />
            <TextField
              label="Confirm Password"
              type="password"
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
            <Button variant="contained" color="primary" type="submit">
              Reset Password
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default PasswordResetModal;