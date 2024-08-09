import {useMutation} from "@tanstack/react-query";
import AuthenticationRequest from "../../models/auth/AuthenticationRequest.ts";
import AuthenticationResponse from "../../models/auth/AuthenticationResponse.ts";
import {createAuthenticationToken} from "../../services/auth-service.ts";
import {useContext} from "react";
import {AuthContext} from "../../features/shared/context/AuthContext.tsx";

const useLoginUserMutation = () => {

  const {setJwtTokenInLocalStorage, setRefreshTokenInLocalStorage} = useContext(AuthContext)!;

  return useMutation({
    mutationFn: (authRequest: AuthenticationRequest) => createAuthenticationToken(authRequest),
    onSuccess: (data: AuthenticationResponse) => {
      setJwtTokenInLocalStorage(data.jwtToken);
      setRefreshTokenInLocalStorage(data.refreshToken);
    }
  });
};

export default useLoginUserMutation;