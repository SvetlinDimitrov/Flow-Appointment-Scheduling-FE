import {AuthContext} from "../../shared/context/AuthContext.tsx";
import {useContext, useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../shared/context/UserContext.tsx";

const Logout = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {removeRefreshToken, removeJwtTokenFun} = useContext(AuthContext)!;
  const {removeUserIdFun} = useContext(UserContext)!;

  useEffect(() => {
    removeJwtTokenFun();
    removeRefreshToken();
    removeUserIdFun();
    queryClient.removeQueries();
    navigate('/');
  }, [removeJwtTokenFun, removeRefreshToken, queryClient, navigate]);

  return null;
};

export default Logout;