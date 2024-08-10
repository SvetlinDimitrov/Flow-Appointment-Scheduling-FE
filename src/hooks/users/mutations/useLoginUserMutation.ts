import {useMutation} from "@tanstack/react-query";
import AuthenticationRequest from "../../../models/auth/AuthenticationRequest.ts";
import AuthenticationResponse from "../../../models/auth/AuthenticationResponse.ts";
import {createAuthenticationToken} from "../../../services/auth-service.ts";
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";
import {getUserIdFromJwt} from "../../../utils/jwt/jwtDecoder.ts";

const useLoginUserMutation = () => {

  const {setJwtTokenFun , setRefreshTokenFun} = useContext(AuthContext)!;
  const {setUserIdFun} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (authRequest: AuthenticationRequest) => createAuthenticationToken(authRequest),
    onSuccess: (data: AuthenticationResponse) => {
      setJwtTokenFun(data.jwtToken);
      setUserIdFun(getUserIdFromJwt(data.jwtToken.token));
      setRefreshTokenFun(data.refreshToken);
    }
  });
};

export default useLoginUserMutation;