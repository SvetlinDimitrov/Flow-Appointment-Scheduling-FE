import {useMutation, useQueryClient} from '@tanstack/react-query';
import {assignStaffToService} from '../../../services/service-service';
import {toast} from 'react-toastify';

const useAssignStaffToServiceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({id, staffEmail}: { id: number; staffEmail: string }) => assignStaffToService(id, staffEmail),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['services']});
      queryClient.invalidateQueries({queryKey: ['users']});
      toast.success('Staff assigned successfully.');
    },
  });
};

export default useAssignStaffToServiceMutation;