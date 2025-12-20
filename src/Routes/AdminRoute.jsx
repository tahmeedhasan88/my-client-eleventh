import { Navigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import useRole from "../Hooks/useRole";


const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <div className='flex items-center justify-center h-[500px]'>
            <img className='h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] animate-spin' src='/myLogo-Photoroom.png'></img>
        </div>;
  }

  if (user && role === 'admin') {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
