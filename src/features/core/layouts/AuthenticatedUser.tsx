import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/AuthContext.tsx";

const AuthenticatedUser = () => {
  const {isUserAuthenticated} = useContext(AuthContext)!;


  if (!isUserAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthenticatedUser;