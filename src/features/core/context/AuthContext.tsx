import RefreshToken from "../../../models/users/RefreshToken.ts";
import React, {createContext, ReactNode, useState} from "react";
import JwtView from "../../../models/users/Jwt.ts";

interface AuthContextType {
  jwtToken: JwtView | null;
  refreshToken: RefreshToken | null;
  setJwtToken: React.Dispatch<React.SetStateAction<JwtView | null>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<RefreshToken | null>>;
  isUserAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [jwtToken, setJwtToken] = useState<JwtView | null>(() => {
    const storedJwtToken = localStorage.getItem('jwtToken');
    return storedJwtToken ? JSON.parse(storedJwtToken) : null;
  });

  const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(() => {
    const storedRefreshToken = localStorage.getItem('refreshToken');
    return storedRefreshToken ? JSON.parse(storedRefreshToken) : null;
  });

  const isUserAuthenticated = () => {
    return !!(jwtToken && new Date(jwtToken.expirationTime) > new Date());
  };

  return (
    <AuthContext.Provider value={{jwtToken, refreshToken, setJwtToken, setRefreshToken, isUserAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;