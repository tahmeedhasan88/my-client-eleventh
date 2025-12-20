import { Navigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import useRole from "../Hooks/useRole";


const VolunteerRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) return <div>Loading...</div>;

  if (user && role === 'volunteer') {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default VolunteerRoute;
