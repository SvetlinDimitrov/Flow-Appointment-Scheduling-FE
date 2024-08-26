import {modifyStaff} from '../../../services/user-service.ts';
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {UpdateUserAdminRequest} from "../../../shared/models/api/users.ts";
import {queryClient} from "../../../utils/react-query/queryClient.ts";

const useModifyStaffMutation = () => {

  return useMutation({
    mutationFn: (data: { id: number, modifyDto: UpdateUserAdminRequest }) => modifyStaff(data.id, data.modifyDto),
    onSuccess: (user) => {
      queryClient.invalidateQueries({queryKey: ['users', 'userRole', user.role]});
      toast.success("Staff modified successfully.");
    },
  });
};

export default useModifyStaffMutation;