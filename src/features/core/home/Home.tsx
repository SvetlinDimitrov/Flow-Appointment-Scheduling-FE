import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../shared/context/UserAuthContext.tsx";
import GuestHome from "./guest_home/GuestHome.tsx";

const Home = () => {
  const { isUserAuthenticated } = useContext(UserAuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate("/appointments");
    }
  }, [isUserAuthenticated, navigate]);

  return <GuestHome />;
};

export default Home;