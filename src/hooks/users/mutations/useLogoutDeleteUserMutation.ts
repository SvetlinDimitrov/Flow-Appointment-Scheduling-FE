import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteUser} from '../../../services/user-service.ts';
import {useContext} from "react";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import {toast} from "react-toastify";

const useLogoutDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  const {logout} = useContext(UserAuthContext)!;

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      logout();
      queryClient.removeQueries();
      toast.success("User deleted successfully.");
    },
  });
};

export default useLogoutDeleteUserMutation;