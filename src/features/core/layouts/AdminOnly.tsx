import {useContext} from "react";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import {Navigate, Outlet} from "react-router-dom";

const AdminOnly = () => {
  const {isAdmin} = useContext(UserAuthContext)!;

  if (!isAdmin) {
    return <Navigate to="/"/>;
  }

  return <Outlet/>;
};

export default AdminOnly;