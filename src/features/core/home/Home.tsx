import {useContext} from "react";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import GuestHome from "./guest_home/GuestHome.tsx";
import AuthHome from "./auth_home/AuthHome.tsx";

const Home = () => {
  const { isUserAuthenticated } = useContext(UserAuthContext)!;

  if (isUserAuthenticated()) return <AuthHome/>;
  return <GuestHome />;
};

export default Home;