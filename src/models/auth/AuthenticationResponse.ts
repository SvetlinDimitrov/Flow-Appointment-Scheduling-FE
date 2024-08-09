import Jwt from "./Jwt.ts";
import RefreshToken from "./RefreshToken.ts";

export default interface AuthenticationResponse {
  jwtToken: Jwt;
  refreshToken: RefreshToken;
}