import {axiosInstance} from '../utils/axios_config/axiosInstance';
import {AuthenticationRequest, AuthenticationResponse, RefreshTokenRequest} from "../models/api/auth.ts";

export const createAuthenticationToken = async (authRequest: AuthenticationRequest): Promise<AuthenticationResponse> => {
  const response = await axiosInstance.post(`/auth`, authRequest);
  return response.data;
};

export const refreshToken = async (refreshRequest: RefreshTokenRequest): Promise<AuthenticationResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refreshRequest),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return response.json();
};