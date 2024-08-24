import {jwtDecode} from 'jwt-decode';
import {UserRole} from "../../shared/models/user.types.ts";

interface JwtPayload {
  userId: string;
  role: UserRole
}

export const getUserIdFromJwt = (jwtToken: string): number => {
  const decoded = jwtDecode<JwtPayload>(jwtToken);
  return parseInt(decoded.userId);
};

export const getUserRoleFromJwt = (jwtToken: string): UserRole => {
  const decoded = jwtDecode<JwtPayload>(jwtToken);
  return decoded.role;
};

