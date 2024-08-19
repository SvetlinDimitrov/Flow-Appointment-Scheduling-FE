import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Box, Button, Modal, TextField, Typography} from '@mui/material';
import {ModifyService} from '../../../../models/service.types';

const serviceSchema = z.object({
  name: z.string()
    .min(3, 'Name must be between 3 and 255 characters')
    .max(255, 'Name must be between 3 and 255 characters'),
  description: z.string()
    .min(1, 'Description is mandatory'),
  duration: z.number()
    .min(1, 'Duration must be greater than 0')
    .nonnegative('Duration is mandatory'),
  price: z.number()
    .gt(0, 'Price must be greater than 0')
    .nonnegative('Price is mandatory'),
  placeName: z.string().min(1, 'Place name is required'),
});

type ServiceFormInputs = z.infer<typeof serviceSchema>;

interface ServiceEditModalProps {
  open: boolean;
  onClose: () => void;
  service: ModifyService;
  onSubmit: (data: ServiceFormInputs) => void;
}

const ServiceEditModal: React.FC<ServiceEditModalProps> = ({open, onClose, service, onSubmit}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<ServiceFormInputs>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      ...service,
      duration: Number(service.duration),
      price: Number(service.price),
    },
  });

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-service-modal">
      <Box position={'absolute'} top={'50%'} left={'50%'} width={400} bgcolor={'background.paper'}
           boxShadow={24} p={4} sx={{
        transform: 'translate(-50%, -50%)',
      }}>
        <Typography id="edit-service-modal" variant="h6" component="h2">
          Edit Service
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Duration"
            type="number"
            {...register('duration', {valueAsNumber: true})}
            error={!!errors.duration}
            helperText={errors.duration?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            {...register('price', {valueAsNumber: true})}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Place Name"
            {...register('placeName')}
            error={!!errors.placeName}
            helperText={errors.placeName?.message}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ServiceEditModal;