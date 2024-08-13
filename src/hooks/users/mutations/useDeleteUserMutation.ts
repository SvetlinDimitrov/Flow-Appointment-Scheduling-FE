import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteUser} from '../../../services/user-service.ts';
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";
import {toast} from "react-toastify";

const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  const {removeRefreshTokenFun, removeJwtTokenFun} = useContext(AuthContext)!;
  const {removeUserIdFun} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      removeRefreshTokenFun();
      removeJwtTokenFun();
      removeUserIdFun();
      queryClient.removeQueries();
      toast.success("User deleted successfully.");
    },
  });
};

export default useDeleteUserMutation;