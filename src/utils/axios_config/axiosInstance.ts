import axios from 'axios';
import Jwt from "../../models/auth/Jwt.ts";
import RefreshToken from "../../models/auth/RefreshToken.ts";
import {refreshToken} from "../../services/auth-service.ts";

interface AuthContextType {
  jwtToken: Jwt | null;
  refreshToken: RefreshToken | null;
  setJwtTokenInLocalStorage: (token: Jwt) => void;
  setRefreshTokenInLocalStorage: (token: RefreshToken) => void;
  isUserAuthenticated: () => boolean;
  removeJwtTokenFromLocalStorage: () => void;
  removeRefreshTokenFromLocalStorage: () => void;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const setupInterceptors = (authContext: AuthContextType) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const {
        jwtToken,
        refreshToken: refreshTokenValue,
        setJwtTokenInLocalStorage,
        setRefreshTokenInLocalStorage,
        removeJwtTokenFromLocalStorage,
        removeRefreshTokenFromLocalStorage
      } = authContext;

      if (refreshTokenValue) {
        if (new Date(refreshTokenValue.expirationTime) <= new Date()) {
          // Refresh token is expired
          removeJwtTokenFromLocalStorage();
          removeRefreshTokenFromLocalStorage();
        } else {
          // Refresh token is valid
          if (jwtToken) {
            if (new Date(jwtToken.expirationTime) <= new Date()) {
              // JWT token is expired, refresh it
              try {
                const response = await refreshToken({ token: refreshTokenValue.token });
                setJwtTokenInLocalStorage(response.jwtToken);
                setRefreshTokenInLocalStorage(response.refreshToken);
                config.headers['Authorization'] = `Bearer ${response.jwtToken.token}`;
              } catch (error) {
                // Failed to refresh token (e.g. refresh token is expired)
                removeJwtTokenFromLocalStorage();
                removeRefreshTokenFromLocalStorage();
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
