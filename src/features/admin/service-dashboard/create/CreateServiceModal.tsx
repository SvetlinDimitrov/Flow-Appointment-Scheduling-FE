import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ServiceDTO} from "../../../../shared/models/api/services.ts";
import {availableServices} from "../../../../services/service-service.ts";

interface CreateServiceModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ServiceDTO) => void;
}

const serviceSchema = z.object({
  name: z.string().min(3, "Name is required and must be at least 3 chars"),
  description: z.string().min(1, "Description is required"),
  duration: z.number().min(1, "Duration must be greater than 0"),
  price: z.number().min(1, "Price must be a positive number"),
  availability: z.boolean(),
  workSpaceName: z.string().min(1, "Workspace Name is required"),
});

const CreateServiceModal = ({open, onClose, onSubmit}: CreateServiceModalProps) => {
  const { register, handleSubmit, formState: { errors }, setValue , reset } = useForm<ServiceDTO>({
    resolver: zodResolver(serviceSchema),
  });

  const onSubmitForm = (data: ServiceDTO) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Service</DialogTitle>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <DialogContent>
          <Box display={'flex'} flexDirection={'column'}
               gap={3} p={2} width={'500px'}>
            <TextField
              label="Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              size="small"
            />
            <TextField
              label="Description"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
              size="small"
            />
            <TextField
              label="Duration"
              type="number"
              {...register("duration", {valueAsNumber: true})}
              error={!!errors.duration}
              helperText={errors.duration?.message}
              fullWidth
              size="small"
            />
            <TextField
              label="Price"
              type="number"
              {...register("price", {valueAsNumber: true})}
              error={!!errors.price}
              helperText={errors.price?.message}
              fullWidth
              size="small"
            />
            <FormControl error={!!errors.workSpaceName} fullWidth size="small">
              <InputLabel id="workspace-label">Workspace Name</InputLabel>
              <Select
                labelId="workspace-label"
                label="Workspace Name"
                {...register("workSpaceName")}
                onChange={(e) => setValue("workSpaceName", e.target.value as string)}
                size="small"
                defaultValue={availableServices[0]}
              >
                {availableServices.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </Select>
              {errors.workSpaceName && <FormHelperText>{errors.workSpaceName.message}</FormHelperText>}
            </FormControl>
            <FormControlLabel
              control={<Checkbox {...register("availability")} size="small"/>}
              label="Availability"
            />

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" size="small">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained" size="small">
            Create
          </Button>

        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateServiceModal;