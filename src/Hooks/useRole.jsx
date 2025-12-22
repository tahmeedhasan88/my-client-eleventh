import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxios from './UseAxios';

const useRole = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxios();

  const { data: roleData, isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/role/${user.email}`,
      );
      return res.data;
    }
  });

  return {
    role: roleData?.role,
    roleLoading: isLoading
  };
};

export default useRole;
