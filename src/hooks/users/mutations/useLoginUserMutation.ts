import {useMutation} from "@tanstack/react-query";
import AuthenticationRequest from "../../../models/auth/AuthenticationRequest.ts";
import AuthenticationResponse from "../../../models/auth/AuthenticationResponse.ts";
import {createAuthenticationToken} from "../../../services/auth-service.ts";
import {useContext} from "react";
import {UserAuthContext} from "../../../features/shared/context/UserAuthContext.tsx";
import {toast} from "react-toastify";

const useLoginUserMutation = () => {

  const {login} = useContext(UserAuthContext)!;

  return useMutation({
    mutationFn: (authRequest: AuthenticationRequest) => createAuthenticationToken(authRequest),
    onSuccess: (data: AuthenticationResponse) => {
      login(data.jwtToken, data.refreshToken);
      toast.success("Login successful.");
    },
    onError: () => {
      toast.error("Invalid email or password.");
    }
  });
};

export default useLoginUserMutation;