import {Box, Button, Paper, Stack, TextField, Typography} from '@mui/material';
import useGetUserQuery from "../../../hooks/users/query/useGetUserQuery.ts";
import {useContext, useState} from "react";
import {UserContext} from "../../shared/context/UserContext.tsx";
import PageNotFound from "../../core/not_found/PageNotFound.tsx";
import UpdateUser from "./update/UpdateUser.tsx";
import LoadingSpinner from "../../core/loading/LoadingSpinner.tsx";
import useUpdateUserMutation from "../../../hooks/users/mutations/useUpdateUserMutation.ts";
import {useNavigate} from "react-router-dom";
import useDeleteUserMutation from "../../../hooks/users/mutations/useDeleteUserMutation.ts";
import {mainWrapperStyle, secondWrapperStyle} from "./settingsStyle.ts";

const Settings = () => {

  const {userId} = useContext(UserContext)!;

  const navigate = useNavigate();

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  if (!userId) {
    navigate('/');
    return null;
  }

  const {data: user, error, isLoading} = useGetUserQuery(userId);
  const updateUserMutation = useUpdateUserMutation();
  const deleteUserMutation = useDeleteUserMutation();

  const handleOpenUpdate = () => setIsUpdateOpen(true);

  const handleCloseUpdate = () => setIsUpdateOpen(false);

  const handleUpdateUser = (firstName: string, lastName: string) => {
    updateUserMutation.mutate({id: userId, user: {firstName, lastName}});
    handleCloseUpdate();
  }

  const handleDeleteUser = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (isConfirmed) {
      deleteUserMutation.mutate(userId);
    }
  }

  if (isLoading) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <Box sx={mainWrapperStyle}>
      <Paper sx={secondWrapperStyle} elevation={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <form>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstName"
              value={user?.firstName}
              InputProps={{readOnly: true}}
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={user?.lastName}
              InputProps={{readOnly: true}}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={user?.email}
              InputProps={{readOnly: true}}
            />
            <TextField
              fullWidth
              label="Role"
              variant="outlined"
              name="role"
              value={user?.role}
              InputProps={{readOnly: true}}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleOpenUpdate}
            >
              Update
            </Button>
            <UpdateUser open={isUpdateOpen}
                        onClose={handleCloseUpdate}
                        onSubmit={handleUpdateUser}/>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleDeleteUser}
            >
              Delete
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Settings;