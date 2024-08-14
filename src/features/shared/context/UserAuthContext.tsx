import {createContext, ReactNode, useState} from 'react';
import {getUserIdFromLocalStorage, removeUserIdFromLocalStorage} from "../../../utils/local_storage/userToken.ts";
import {
  getRefreshTokenFromLocalStorage,
  removeRefreshTokenFromLocalStorage,
  setRefreshTokenInLocalStorage
} from "../../../utils/local_storage/refreshToken.ts";
import RefreshToken from "../../../models/auth/RefreshToken.ts";
import JwtToken from "../../../models/auth/JwtToken.ts";
import {removeJwtTokenFromLocalStorage, setJwtTokenInLocalStorage} from "../../../utils/local_storage/jwtToken.ts";
import {getUserIdFromJwt} from "../../../utils/jwt/jwtDecoder.ts";

interface UserContextType {
  userId: number | null;
  login: (jwtToken: JwtToken, refreshToken: RefreshToken) => void;
  logout: () => void;
  isUserAuthenticated: () => boolean;
}

export const UserAuthContext = createContext<UserContextType | undefined>(undefined);

export const UserAuthProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(getUserIdFromLocalStorage);

  const isUserAuthenticated = () => {
    let refreshToken: (RefreshToken | null) = getRefreshTokenFromLocalStorage();
    return !!(refreshToken && new Date(refreshToken.expirationTime) > new Date());
  };

  const login = (jwtToken: JwtToken, refreshToken: RefreshToken) => {
    setRefreshTokenInLocalStorage(refreshToken);
    setJwtTokenInLocalStorage(jwtToken);
    setUserId(getUserIdFromJwt(jwtToken.token));
  }

  const logout = () => {
    removeRefreshTokenFromLocalStorage();
    removeJwtTokenFromLocalStorage();
    removeUserIdFromLocalStorage();
  }

  return (
    <UserAuthContext.Provider value={{
      userId,
      login,
      logout,
      isUserAuthenticated,
    }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
