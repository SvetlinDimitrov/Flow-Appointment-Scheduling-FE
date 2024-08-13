import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";
import {toast} from "react-toastify";

const useLogoutUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {removeRefreshTokenFun, removeJwtTokenFun} = useContext(AuthContext)!;
  const {removeUserIdFun} = useContext(UserContext)!;

  return () => {
    removeJwtTokenFun();
    removeRefreshTokenFun();
    removeUserIdFun();
    queryClient.removeQueries();
    toast.success("Logged out successfully.");
    navigate('/');
  };
};

export default useLogoutUser;