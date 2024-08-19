import {createContext, ReactNode, useState} from 'react';
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
import {getUserIdFromJwt} from "../../../utils/jwt/jwtDecoder.ts";
import {JwtToken, RefreshToken} from "../../../models/auth.types.ts";

interface UserContextType {
  userId: number | null;
  login: (jwtToken: JwtToken, refreshToken: RefreshToken) => void;
  logout: () => void;
  isUserAuthenticated: () => boolean;
  isAdmin: boolean;
}

export const UserAuthContext = createContext<UserContextType | undefined>(undefined);

export const UserAuthProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(() => {
    const jwt: JwtToken = getJwtTokenFromLocalStorage()!;
    if (jwt) return getUserIdFromJwt(jwt.token);
    return null;
  });

  const isAdmin = true;

  const isUserAuthenticated = () => {
    let refreshToken: (RefreshToken | null) = getRefreshTokenFromLocalStorage();
    return !!(refreshToken && new Date(refreshToken.expirationTime) > new Date());
  };

  const login = (jwtToken: JwtToken, refreshToken: RefreshToken) => {
    setRefreshTokenInLocalStorage(refreshToken);
    setJwtTokenInLocalStorage(jwtToken);
    const userId = getUserIdFromJwt(jwtToken.token);
    setUserId(userId);
  }

  const logout = () => {
    removeRefreshTokenFromLocalStorage();
    removeJwtTokenFromLocalStorage();
    setUserId(null);
  }

  return (
    <UserAuthContext.Provider value={{
      userId,
      login,
      logout,
      isUserAuthenticated,
      isAdmin
    }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
