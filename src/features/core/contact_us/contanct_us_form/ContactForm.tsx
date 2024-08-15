import {TextField} from '@mui/material';
import {useForm} from 'react-hook-form';
import {ContactUsButton, MainWrapper} from "./contactUsStyles.ts";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {handleSubmit, register, formState: {errors}} = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <MainWrapper component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        {...register('name', {required: 'Name is required'})}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
        sx={{backgroundColor: 'white', borderRadius: 1}}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        {...register('email', {
          required: 'Email is required',
          pattern: {value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Invalid email address'}
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
        sx={{backgroundColor: 'white', borderRadius: 1}}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        {...register('message', {required: 'Message is required'})}
        error={!!errors.message}
        helperText={errors.message ? errors.message.message : ''}
        sx={{backgroundColor: 'white', borderRadius: 1}}
      />
      <ContactUsButton variant="contained" color="primary" type="submit">
        Send Message
      </ContactUsButton>
    </MainWrapper>
  );
};

export default ContactForm;