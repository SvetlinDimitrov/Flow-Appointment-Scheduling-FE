import {useMutation} from "@tanstack/react-query";
import {updateUser} from "../../../services/user-service.ts";
import {queryClient} from "../../../utils/react_query/queryClient.ts";
import {toast} from "react-toastify";
import {UpdateUserRequest} from "../../../models/api/users.ts";

const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: { id: number; user: UpdateUserRequest }) => updateUser(data.id, data.user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['user', data.id]});
      toast.success("User updated successfully.");
    },
  });
};

export default useUpdateUserMutation;