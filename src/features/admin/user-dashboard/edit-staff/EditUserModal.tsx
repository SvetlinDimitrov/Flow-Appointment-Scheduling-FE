import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  TextField
} from '@mui/material';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {CreateUpdateUserAdminRequest} from "../../../../shared/models/api/users.ts";
import {UserRole} from "../../../../shared/models/user.types.ts";
import {staffDetailsCreateUpdateValidation} from "../../../../shared/validation/users.validations.ts";

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: CreateUpdateUserAdminRequest) => void;
  initialData: CreateUpdateUserAdminRequest;
}

const schema = staffDetailsCreateUpdateValidation;

const EditUserModal = ({open, onClose, onSave, initialData} : EditUserModalProps) => {

  const {register, handleSubmit, formState: {errors}} = useForm<CreateUpdateUserAdminRequest>({
    defaultValues: initialData,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: CreateUpdateUserAdminRequest) => {
    onSave(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            select
            label="User Role"
            {...register("userRole")}
            fullWidth
            margin="normal"
            error={!!errors.userRole}
            defaultValue={initialData.userRole}
          >
            <MenuItem value={UserRole.ADMINISTRATOR}>Administrator</MenuItem>
            <MenuItem value={UserRole.EMPLOYEE}>Employee</MenuItem>
          </TextField>
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