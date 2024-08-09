import {createUser} from '../../services/user-service';
import CreateUser from '../../models/users/CreateUser';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import User from "../../models/users/User.ts";
import {UserContext} from "../../features/shared/context/UserContext.tsx";
import {useContext} from "react";

const useCreateUserMutation = () => {

  const queryClient = useQueryClient();

  const {setUserId} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (newUser: CreateUser) => createUser(newUser),
    onSuccess: (data: User) => {
      setUserId(data.id);
      queryClient.invalidateQueries({queryKey: ['users']});
    }
  });
};

export default useCreateUserMutation;