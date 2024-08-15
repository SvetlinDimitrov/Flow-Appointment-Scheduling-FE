// src/features/users/settings/Settings.tsx
import {Stack, Typography} from '@mui/material';
import useGetUserQuery from "../../../hooks/users/query/useGetUserQuery.ts";
import {useContext, useState} from "react";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import PageNotFound from "../../core/not_found/PageNotFound.tsx";
import UpdateUser from "./update/UpdateUser.tsx";
import LoadingSpinner from "../../core/loading/LoadingSpinner.tsx";
import useUpdateUserMutation from "../../../hooks/users/mutations/useUpdateUserMutation.ts";
import {useNavigate} from "react-router-dom";
import useDeleteUserMutation from "../../../hooks/users/mutations/useDeleteUserMutation.ts";
import {BoxButtonWrapper, MainWrapper, SecondWrapper, StyleButton} from "./settingsStyle.ts";
import UserInfoItem from "./user_info_item/UserInfoItem.tsx";

const Settings = () => {

  const {userId} = useContext(UserAuthContext)!;

  const navigate = useNavigate();

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  if (!userId) {
    navigate("/login");
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

  if (isLoading || !user) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <MainWrapper>
      <SecondWrapper elevation={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <Stack spacing={2}>
          <UserInfoItem label="First Name:" value={user.firstName}/>
          <UserInfoItem label="Last Name:" value={user.lastName}/>
          <UserInfoItem label="Email:" value={user.email}/>
          <UserInfoItem label="Role:" value={user.role}/>
          <BoxButtonWrapper>
            <StyleButton
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleOpenUpdate}
              aria-hidden={false}
            >
              Update
            </StyleButton>
            <StyleButton
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleDeleteUser}
            >
              Delete
            </StyleButton>
          </BoxButtonWrapper>
          <UpdateUser open={isUpdateOpen}
                      onClose={handleCloseUpdate}
                      onSubmit={handleUpdateUser}
                      data={user}/>
        </Stack>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default Settings;