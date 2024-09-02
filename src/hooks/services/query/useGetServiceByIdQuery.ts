import { useQuery } from '@tanstack/react-query';
import { getServiceById } from '../../../services/service-service.ts';
import { Service } from '../../../shared/models/service.types.ts';

const useGetServiceByIdQuery = (id: number) => {
  const queryKey = ['service', id];

  return useQuery<Service>({
    queryKey,
    queryFn: () => getServiceById(id),
  });
};

export default useGetServiceByIdQuery;