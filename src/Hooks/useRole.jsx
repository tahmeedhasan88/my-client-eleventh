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
        `${import.meta.env.VITE_API_URL}/users/role/${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
        }
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
