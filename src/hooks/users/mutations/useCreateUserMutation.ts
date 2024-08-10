import {createUser} from '../../../services/user-service.ts';
import CreateUser from '../../../models/users/CreateUser.ts';
import {useMutation} from "@tanstack/react-query";

const useCreateUserMutation = () => {

  return useMutation({
    mutationFn: (newUser: CreateUser) => createUser(newUser),
  });
};

export default useCreateUserMutation;