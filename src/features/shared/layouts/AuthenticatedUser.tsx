import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../core/context/AuthContext";

const AuthenticatedUser = () => {
  const {isUserAuthenticated} = useContext(AuthContext)!;


  if (!isUserAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthenticatedUser;