import {useContext} from "react";
import {UserAuthContext} from "../../context/UserAuthContext.tsx";
import {UserRole} from "../../models/user.types.ts";
import {Navigate, Outlet} from "react-router-dom";

const StaffRoutes = () => {
  const {role} = useContext(UserAuthContext)!;

  if (role !== UserRole.EMPLOYEE) {
    return <Navigate to="/"/>;
  }

  return <Outlet/>;
};

export default StaffRoutes;