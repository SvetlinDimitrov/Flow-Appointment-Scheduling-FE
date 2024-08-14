import JwtToken from "./JwtToken.ts";
import RefreshToken from "./RefreshToken.ts";

export default interface AuthenticationResponse {
  jwtToken: JwtToken;
  refreshToken: RefreshToken;
}