import {createUser} from '../../../services/user-service.ts';
import CreateUser from '../../../models/users/CreateUser.ts';
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";

const useCreateUserMutation = () => {

  return useMutation({
    mutationFn: (newUser: CreateUser) => createUser(newUser),
    onSuccess: () => {
      toast.success("User created successfully.");
    },
  });
};

export default useCreateUserMutation;