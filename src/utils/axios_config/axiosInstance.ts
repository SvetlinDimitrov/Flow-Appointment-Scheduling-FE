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
  setJwtTokenFun: (token: Jwt) => void;
  setRefreshTokenFun: (token: RefreshToken) => void;
  removeJwtTokenFun: () => void;
  removeRefreshToken: () => void;
}

const setupInterceptors = (auth: AuthContextType) => {
  axiosInstance.interceptors.request.use(
    async (config) => {

      const refreshTokenValue = getRefreshTokenFromLocalStorage();
      const jwtToken = getJwtTokenFromLocalStorage();
      if (refreshTokenValue) {
        if (new Date(refreshTokenValue.expirationTime) <= new Date()) {
          // Refresh token is expired
          auth.removeJwtTokenFun();
          auth.removeRefreshToken();
        } else {
          // Refresh token is valid
          if (jwtToken) {
            if (new Date(jwtToken.expirationTime) <= new Date()) {
              // JWT token is expired, refresh it
              try {
                const response = await refreshToken({ token: refreshTokenValue.token });
                auth.setJwtTokenFun(response.jwtToken);
                auth.setRefreshTokenFun(response.refreshToken);
                config.headers['Authorization'] = `Bearer ${response.jwtToken.token}`;
              } catch (error) {
                console.log(123);
                // Failed to refresh token (e.g. refresh token is expired)
                // auth.removeJwtTokenFun();
                // auth.removeRefreshToken();
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
