import LoadingSpinner from "../../core/loading/LoadingSpinner.tsx";
import { AuthContext } from "../../shared/context/AuthContext.tsx";
import { useContext, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { removeJwtTokenFromLocalStorage, removeRefreshTokenFromLocalStorage } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    removeJwtTokenFromLocalStorage();
    removeRefreshTokenFromLocalStorage();
    queryClient.removeQueries();
    navigate('/');
  }, [removeJwtTokenFromLocalStorage, removeRefreshTokenFromLocalStorage, queryClient, navigate]);

  return <LoadingSpinner />;
};

export default Logout;