import axiosInstance from '../utils/axios_config/axiosInstance';
import AuthenticationRequest from "../models/auth/AuthenticationRequest.ts";
import AuthenticationResponse from "../models/auth/AuthenticationResponse.ts";
import RefreshTokenRequest from "../models/auth/RefreshTokenRequest.ts";

export const createAuthenticationToken = async (authRequest: AuthenticationRequest): Promise<AuthenticationResponse> => {
  const response = await axiosInstance.post(`/auth`, authRequest);
  return response.data;
};

export const refreshToken = async (refreshRequest: RefreshTokenRequest): Promise<AuthenticationResponse> => {
  const response = await axiosInstance.post(`/auth/refresh`, refreshRequest);
  return response.data;
};