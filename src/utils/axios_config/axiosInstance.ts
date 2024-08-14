import axios from 'axios';
import {refreshToken} from "../../services/auth-service.ts";
import {getRefreshTokenFromLocalStorage} from "../local_storage/refreshToken.ts";
import {getJwtTokenFromLocalStorage} from "../local_storage/jwtToken.ts";
import Jwt from "../../models/auth/Jwt.ts";
import RefreshToken from "../../models/auth/RefreshToken.ts";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

interface AuthContextType {
  setJwtToken: (token: Jwt) => void;
  setRefreshToken: (token: RefreshToken) => void;
  removeJwtToken: () => void;
  removeRefreshToken: () => void;
}

interface UserContextType {
  removeUserId: () => void;
}

const setupInterceptors = (authContext: AuthContextType, userContext: UserContextType) => {
  axiosInstance.interceptors.request.use(
    async (config) => {

      const refreshTokenValue = getRefreshTokenFromLocalStorage();
      const jwtToken = getJwtTokenFromLocalStorage();
      if (refreshTokenValue) {
        if (new Date(refreshTokenValue.expirationTime) <= new Date()) {
          // Refresh token is expired
          authContext.removeJwtToken();
          authContext.removeRefreshToken();
          userContext.removeUserId();
        } else {
          // Refresh token is valid
          if (jwtToken) {
            if (new Date(jwtToken.expirationTime) <= new Date()) {
              // JWT token is expired, refresh it
              try {
                const response = await refreshToken({ token: refreshTokenValue.token });
                authContext.setJwtToken(response.jwtToken);
                authContext.setRefreshToken(response.refreshToken);
                config.headers['Authorization'] = `Bearer ${response.jwtToken.token}`;
              } catch (error) {
                authContext.removeJwtToken();
                authContext.removeRefreshToken();
                userContext.removeUserId();
              }
            } else {
              // JWT token is valid
              config.headers['Authorization'] = `Bearer ${jwtToken.token}`;
            }
          }
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export { axiosInstance, setupInterceptors };
