import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../../services/user-service';
import Page from '../../../shared/models/api/shared/Page';
import { User, UserRole } from '../../../shared/models/user.types';

const useGetUsersByRole = (page: number, size: number, userRole: UserRole) => {
  return useQuery<Page<User>>({
    queryKey: ['users', 'page', page, 'size', size, 'userRole', userRole],
    queryFn: () => getAllUsers(page, size, userRole)
  });
};

export default useGetUsersByRole;