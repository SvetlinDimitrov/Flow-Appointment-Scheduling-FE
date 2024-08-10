import Jwt from "../../models/auth/Jwt.ts";

export const setJwtTokenInLocalStorage = (token: Jwt) => {
  localStorage.setItem('flow/jwtToken', JSON.stringify(token));
}

export const getJwtTokenFromLocalStorage = (): Jwt | null => {
  const storedJwtToken = localStorage.getItem('flow/jwtToken');
  return storedJwtToken ? JSON.parse(storedJwtToken) : null;
}

export const removeJwtTokenFromLocalStorage = () => {
  localStorage.removeItem('flow/jwtToken');
}