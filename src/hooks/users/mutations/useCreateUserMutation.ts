import {createUser} from '../../../services/user-service.ts';
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {CreateUserRequest} from "../../../models/api/users.ts";

const useCreateUserMutation = () => {

  return useMutation({
    mutationFn: (newUser: CreateUserRequest) => createUser(newUser),
    onSuccess: () => {
      toast.success("User created successfully.");
    },
  });
};

export default useCreateUserMutation;