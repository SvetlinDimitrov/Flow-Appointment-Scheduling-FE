import {useMutation} from "@tanstack/react-query";
import AuthenticationRequest from "../../../models/auth/AuthenticationRequest.ts";
import AuthenticationResponse from "../../../models/auth/AuthenticationResponse.ts";
import {createAuthenticationToken} from "../../../services/auth-service.ts";
import {useContext} from "react";
import {AuthContext} from "../../../features/shared/context/AuthContext.tsx";
import {UserContext} from "../../../features/shared/context/UserContext.tsx";
import {getUserIdFromJwt} from "../../../utils/jwt/jwtDecoder.ts";
import {toast} from "react-toastify";

const useLoginUserMutation = () => {

  const {setJwtToken , setRefreshToken} = useContext(AuthContext)!;
  const {setUserId} = useContext(UserContext)!;

  return useMutation({
    mutationFn: (authRequest: AuthenticationRequest) => createAuthenticationToken(authRequest),
    onSuccess: (data: AuthenticationResponse) => {
      setJwtToken(data.jwtToken);
      setUserId(getUserIdFromJwt(data.jwtToken.token));
      setRefreshToken(data.refreshToken);
      toast.success("Login successful.");
    },
    onError: () => {
      toast.error("Invalid email or password.");
    }
  });
};

export default useLoginUserMutation;