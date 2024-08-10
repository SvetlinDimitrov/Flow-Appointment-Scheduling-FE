import {useMutation} from "@tanstack/react-query";
import UpdateUser from "../../../models/users/UpdateUser.ts";
import {updateUser} from "../../../services/user-service.ts";
import {queryClient} from "../../../utils/react_query/queryClient.ts";

const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: { id: number; user: UpdateUser }) => updateUser(data.id, data.user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['user', data.id]});
    },
  });
};

export default useUpdateUserMutation;