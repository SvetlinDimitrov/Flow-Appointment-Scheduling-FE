import {useQuery} from "@tanstack/react-query";
import {getUserById} from "../../../services/user-service.ts";

const useGetUserQuery = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });
};

export default useGetUserQuery;