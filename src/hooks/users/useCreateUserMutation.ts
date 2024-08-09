import {createUser} from '../../services/user-service';
import CreateUser from '../../models/users/CreateUser';
import {useMutation} from "@tanstack/react-query";
import User from "../../models/users/User.ts";
import {UserContext} from "../../features/shared/context/UserContext.tsx";
import {useContext} from "react";

const useCreateUserMutation = () => {

  const {setUserIdInLocalStorage} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (newUser: CreateUser) => createUser(newUser),
    onSuccess: (data: User) => {
      setUserIdInLocalStorage(data.id);
    }
  });
};

export default useCreateUserMutation;