import RefreshToken from "../../../models/auth/RefreshToken.ts";
import {createContext, ReactNode, useState} from "react";
import Jwt from "../../../models/auth/Jwt.ts";
import {
  getRefreshTokenFromLocalStorage,
  removeRefreshTokenFromLocalStorage,
  setRefreshTokenInLocalStorage
} from "../../../utils/local_storage/refreshToken.ts";
import {
  getJwtTokenFromLocalStorage,
  removeJwtTokenFromLocalStorage,
  setJwtTokenInLocalStorage
} from "../../../utils/local_storage/jwtToken.ts";

interface AuthContextType {
  jwtToken: Jwt | null;
  refreshToken: RefreshToken | null;
  setJwtTokenFun: (token: Jwt) => void;
  setRefreshTokenFun: (token: RefreshToken) => void;
  removeJwtTokenFun: () => void;
  removeRefreshToken: () => void;
  isUserAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {

  const [jwtToken, setJwtToken] = useState<Jwt | null>(getJwtTokenFromLocalStorage());
  const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(getRefreshTokenFromLocalStorage());

  const isUserAuthenticated = () => {
    return !!(refreshToken && new Date(refreshToken.expirationTime) > new Date());
  };

  const setJwtTokenFun = (token: Jwt) => {
    setJwtTokenInLocalStorage(token);
    setJwtToken(token);
  };

  const setRefreshTokenFun = (token: RefreshToken) => {
    setRefreshTokenInLocalStorage(token);
    setRefreshToken(token);
  };

  const removeJwtTokenFun = () => {
    removeJwtTokenFromLocalStorage();
    setJwtToken(null);
  };

  const removeRefreshToken = () => {
    removeRefreshTokenFromLocalStorage()
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{
      jwtToken,
      refreshToken,
      isUserAuthenticated,
      setJwtTokenFun,
      setRefreshTokenFun,
      removeJwtTokenFun,
      removeRefreshToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;