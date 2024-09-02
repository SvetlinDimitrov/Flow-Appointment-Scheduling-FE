import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from '@mui/material';
import {ServiceDTO} from "../../../../shared/models/api/services.ts";
import {serviceCreateUpdateValidations} from "../../../../shared/validation/services.validations.ts";
import useGetAllWorkSpacesNamesQuery from "../../../../hooks/services/query/useGetAllWorkSpacesNamesQuery.ts";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";
import LoadingSpinner from "../../../../shared/core/loading/LoadingSpinner.tsx";
import {useEffect} from "react";

const serviceSchema = serviceCreateUpdateValidations;

type ServiceFormInputs = z.infer<typeof serviceSchema>;

interface ServiceEditModalProps {
  open: boolean;
  onClose: () => void;
  service: ServiceDTO;
  onSubmit: (data: ServiceFormInputs) => void;
}

const ServiceEditModal = ({ open, onClose, service, onSubmit } : ServiceEditModalProps) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ServiceFormInputs>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      ...service
    },
  });

  useEffect(() => {
    reset(service);
  }, [service, reset]);

  const {data, isLoading, error} = useGetAllWorkSpacesNamesQuery();

  const handleFormSubmit = (data: ServiceFormInputs) => {
    data.duration *= 60;

    onSubmit(data);
    reset();
  };

  const handleClose = () => {
    onClose();
  };

  if (isLoading || !data) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="edit-service-modal">
      <Box position={'absolute'} top={'50%'} left={'50%'} width={400} bgcolor={'background.paper'}
           boxShadow={24} p={4} sx={{
        transform: 'translate(-50%, -50%)',
      }}>
        <Typography id="edit-service-modal" variant="h6" component="h2">
          Edit Service
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
            {...register('duration', { valueAsNumber: true })}
            error={!!errors.duration}
            helperText={errors.duration ? errors.duration.message : "Please enter the duration in minutes"}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            {...register('price', { valueAsNumber: true })}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
          />
          <FormControl error={!!errors.workSpaceName} fullWidth size="small">
            <InputLabel id="workspace-label">Workspace Name</InputLabel>
            <Select
              labelId="workspace-label"
              label="Workspace Name"
              {...register("workSpaceName")}
              size="small"
              defaultValue={service.workSpaceName}
            >
              {data.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
            {errors.workSpaceName && <FormHelperText>{errors.workSpaceName.message}</FormHelperText>}
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                {...register('availability')}
                defaultChecked={service.availability}
              />
            }
            label="Available"
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
