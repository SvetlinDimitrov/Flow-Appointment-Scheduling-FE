import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
  userId: string;
}

export const getUserIdFromJwt = (jwtToken: string): number => {
  const decoded = jwtDecode<JwtPayload>(jwtToken);
  return parseInt(decoded.userId);
};