import {FC} from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {UpdateUserAdminRequest} from "../../../../shared/models/api/users.ts";
import {UserRole} from "../../../../shared/models/user.types.ts";

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: UpdateUserAdminRequest) => void;
  initialData: UpdateUserAdminRequest;
}

const schema = z.object({
  userRole: z.nativeEnum(UserRole),
  salary: z.coerce.number().min(0, "Salary must be a positive number"),
  beginWorkingHour: z.string().min(1, "Begin Working Hour is required"),
  endWorkingHour: z.string().min(1, "End Working Hour is required"),
  isAvailable: z.boolean(),
});

const EditUserModal: FC<EditUserModalProps> = ({open, onClose, onSave, initialData}) => {

  console.log(initialData);

  const {register, handleSubmit, formState: {errors}} = useForm<UpdateUserAdminRequest>({
    defaultValues: initialData,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UpdateUserAdminRequest) => {
    onSave(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel id="user-role-label">User Role</InputLabel>
            <Select
              labelId="user-role-label"
              {...register("userRole")}
              variant="outlined"
              error={!!errors.userRole}
              value={initialData.userRole}
            >
              <MenuItem value={UserRole.ADMINISTRATOR}>Administrator</MenuItem>
              <MenuItem value={UserRole.EMPLOYEE}>Employee</MenuItem>
            </Select>
          </FormControl>
          <TextField
            {...register("salary")}
            label="Salary"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.salary}
            helperText={errors.salary?.message}
          />
          <TextField
            {...register("beginWorkingHour")}
            label="Begin Working Hour"
            type="time"
            fullWidth
            margin="normal"
            error={!!errors.beginWorkingHour}
            helperText={errors.beginWorkingHour?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            {...register("endWorkingHour")}
            label="End Working Hour"
            type="time"
            fullWidth
            margin="normal"
            error={!!errors.endWorkingHour}
            helperText={errors.endWorkingHour?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("isAvailable")}
                defaultChecked={initialData.isAvailable}
              />
            }
            label="Is Available"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditUserModal;