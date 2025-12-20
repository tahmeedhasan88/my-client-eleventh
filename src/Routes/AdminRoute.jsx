import { Navigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import useRole from "../Hooks/useRole";


const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (user && role === 'admin') {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
