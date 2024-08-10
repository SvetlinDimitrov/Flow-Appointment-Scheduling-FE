import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteUser} from '../../../services/user-service.ts';
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";

const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  const {removeRefreshToken, removeJwtTokenFun} = useContext(AuthContext)!;
  const {removeUserIdFun} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      removeRefreshToken();
      removeJwtTokenFun();
      removeUserIdFun();
      queryClient.removeQueries();
    },
  });
};

export default useDeleteUserMutation;