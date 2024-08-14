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
  setJwtToken: (token: Jwt) => void;
  setRefreshToken: (token: RefreshToken) => void;
  removeJwtToken: () => void;
  removeRefreshToken: () => void;
  isUserAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {

  const [jwtToken, setJwt] = useState<Jwt | null>(getJwtTokenFromLocalStorage);
  const [refreshToken, setRefresh] = useState<RefreshToken | null>(getRefreshTokenFromLocalStorage);

  const isUserAuthenticated = () => {
    return !!(refreshToken && new Date(refreshToken.expirationTime) > new Date());
  };

  const setJwtToken = (token: Jwt) => {
    setJwtTokenInLocalStorage(token);
    setJwt(token);
  };

  const setRefreshToken = (token: RefreshToken) => {
    setRefreshTokenInLocalStorage(token);
    setRefresh(token);
  };

  const removeJwtToken = () => {
    removeJwtTokenFromLocalStorage();
    setJwt(null);
  };

  const removeRefreshToken = () => {
    removeRefreshTokenFromLocalStorage()
    setRefresh(null);
  };

  return (
    <AuthContext.Provider value={{
      jwtToken,
      refreshToken,
      isUserAuthenticated,
      setJwtToken,
      setRefreshToken,
      removeJwtToken,
      removeRefreshToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;