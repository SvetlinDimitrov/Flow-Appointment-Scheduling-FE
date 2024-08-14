import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteUser} from '../../../services/user-service.ts';
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";
import {toast} from "react-toastify";

const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  const {removeRefreshToken, removeJwtToken} = useContext(AuthContext)!;
  const {removeUserId} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      removeRefreshToken();
      removeJwtToken();
      removeUserId();
      queryClient.removeQueries();
      toast.success("User deleted successfully.");
    },
  });
};

export default useDeleteUserMutation;