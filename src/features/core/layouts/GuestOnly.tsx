import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";

const GuestOnly = () => {
  const {isUserAuthenticated} = useContext(AuthContext)!;

  if (isUserAuthenticated()) {
    return <Navigate to="/"/>;
  }

  return <Outlet/>;
};

export default GuestOnly;