import RefreshToken from "../../../models/auth/RefreshToken.ts";
import {createContext, ReactNode, useState} from "react";
import Jwt from "../../../models/auth/Jwt.ts";

interface AuthContextType {
  jwtToken: Jwt | null;
  refreshToken: RefreshToken | null;
  setJwtTokenInLocalStorage: (token: Jwt) => void;
  setRefreshTokenInLocalStorage: (token: RefreshToken) => void;
  removeJwtTokenFromLocalStorage: () => void;
  removeRefreshTokenFromLocalStorage: () => void;
  isUserAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [jwtToken, setJwtToken] = useState<Jwt | null>(() => {
    const storedJwtToken = localStorage.getItem('flow/jwtToken');
    return storedJwtToken ? JSON.parse(storedJwtToken) : null;
  });

  const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(() => {
    const storedRefreshToken = localStorage.getItem('flow/refreshToken');
    return storedRefreshToken ? JSON.parse(storedRefreshToken) : null;
  });

  const isUserAuthenticated = () => {
    return !!(refreshToken && new Date(refreshToken.expirationTime) > new Date());
  };

  const setJwtTokenInLocalStorage = (token: Jwt) => {
    localStorage.setItem('flow/jwtToken', JSON.stringify(token));
    setJwtToken(token);
  };

  const setRefreshTokenInLocalStorage = (token: RefreshToken) => {
    localStorage.setItem('flow/refreshToken', JSON.stringify(token));
    setRefreshToken(token);
  };

  const removeJwtTokenFromLocalStorage = () => {
    localStorage.removeItem('flow/jwtToken');
    setJwtToken(null);
  };

  const removeRefreshTokenFromLocalStorage = () => {
    localStorage.removeItem('flow/refreshToken');
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{
      jwtToken,
      refreshToken,
      isUserAuthenticated,
      setJwtTokenInLocalStorage,
      setRefreshTokenInLocalStorage,
      removeJwtTokenFromLocalStorage,
      removeRefreshTokenFromLocalStorage
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;