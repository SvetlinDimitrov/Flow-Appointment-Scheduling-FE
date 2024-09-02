import {Box, Button, Checkbox, FormControlLabel, MenuItem, Modal, TextField, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {UserRole} from "../../../../../shared/models/user.types.ts";
import {HireStaffRequest} from "../../../../../shared/models/api/users.ts";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  staffDetailsCreateUpdateValidation
} from "../../../../../shared/validation/users.validations.ts";

interface HireStaffForm{
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  staffDetailsDto: {
    userRole: UserRole;
    salary: number;
    beginWorkingHour: string;
    endWorkingHour: string;
    isAvailable: boolean;
  };
}

interface HireStaffModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: HireStaffRequest) => void;
}

const schema = z.object({
  userInfo: z.object({
    firstName: nameValidation,
    lastName: nameValidation,
    email: emailValidation,
    password: passwordValidation,
    confirmPassword: z.string(),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  staffDetailsDto: staffDetailsCreateUpdateValidation
});

const HireStaffModal = ({open, onClose, onSubmit} : HireStaffModalProps) => {
  const {register, handleSubmit, formState: {errors} , reset} = useForm<HireStaffForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      staffDetailsDto: {
        userRole: UserRole.EMPLOYEE,
        salary: 0,
        beginWorkingHour: '',
        endWorkingHour: '',
        isAvailable: true
      },
    },
  });

  const onSubmitForm = (data: HireStaffForm) => {
    const { confirmPassword, ...userInfo } = data.userInfo;
    const hireStaffRequest: HireStaffRequest = {
      userInfo,
      staffDetailsDto: data.staffDetailsDto
    };
    onSubmit(hireStaffRequest);
    reset();
  };

  const onCloseModal = () => {
    reset();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <Box p={4} bgcolor="background.paper" borderRadius={2} width={400} height={600} overflow={'auto'}>
        <Typography variant="h6" mb={2}>Hire Staff Member</Typography>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <TextField
            size={'small'}
            label="First Name"
            {...register("userInfo.firstName")}
            fullWidth
            margin="normal"
            error={!!errors.userInfo?.firstName}
            helperText={errors.userInfo?.firstName?.message}
          />
          <TextField
            size={'small'}
            label="Last Name"
            {...register("userInfo.lastName")}
            fullWidth
            margin="normal"
            error={!!errors.userInfo?.lastName}
            helperText={errors.userInfo?.lastName?.message}
          />
          <TextField
            size={'small'}
            label="Email"
            {...register("userInfo.email")}
            fullWidth
            margin="normal"
            error={!!errors.userInfo?.email}
            helperText={errors.userInfo?.email?.message}
          />
          <TextField
            size={'small'}
            label="Password"
            type="password"
            {...register("userInfo.password")}
            fullWidth
            margin="normal"
            error={!!errors.userInfo?.password}
            helperText={errors.userInfo?.password?.message}
          />
          <TextField
            size={'small'}
            label="Confirm Password"
            type="password"
            {...register("userInfo.confirmPassword")}
            fullWidth
            margin="normal"
            error={!!errors.userInfo?.confirmPassword}
            helperText={errors.userInfo?.confirmPassword?.message}
          />
          <TextField
            size={'small'}
            select
            label="User Role"
            {...register("staffDetailsDto.userRole")}
            fullWidth
            margin="normal"
            error={!!errors.staffDetailsDto?.userRole}
            helperText={errors.staffDetailsDto?.userRole?.message}
            defaultValue={UserRole.EMPLOYEE}
          >
            <MenuItem value={UserRole.ADMINISTRATOR}>Administrator</MenuItem>
            <MenuItem value={UserRole.EMPLOYEE}>Employee</MenuItem>
          </TextField>
          <TextField
            size={'small'}
            label="Salary"
            type="number"
            {...register("staffDetailsDto.salary")}
            fullWidth
            margin="normal"
            error={!!errors.staffDetailsDto?.salary}
            helperText={errors.staffDetailsDto?.salary?.message}
          />
          <TextField
            size={'small'}
            label="Begin Working Hour"
            type="time"
            {...register("staffDetailsDto.beginWorkingHour")}
            fullWidth
            margin="normal"
            error={!!errors.staffDetailsDto?.beginWorkingHour}
            helperText={errors.staffDetailsDto?.beginWorkingHour?.message}
            InputLabelProps={{shrink: true}}
          />
          <TextField
            size={'small'}
            label="End Working Hour"
            type="time"
            {...register("staffDetailsDto.endWorkingHour")}
            fullWidth
            margin="normal"
            error={!!errors.staffDetailsDto?.endWorkingHour}
            helperText={errors.staffDetailsDto?.endWorkingHour?.message}
            InputLabelProps={{shrink: true}}
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("staffDetailsDto.isAvailable")}
                defaultChecked={true}
              />
            }
            label="Is Available"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default HireStaffModal;