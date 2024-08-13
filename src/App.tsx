import {Route, Routes} from "react-router-dom";
import Home from "./features/core/home/Home.tsx";
import GuestOnly from "./features/core/layouts/GuestOnly.tsx";
import Login from "./features/users/login/Login.tsx";
import Register from "./features/users/register/Register.tsx";
import PageNotFound from "./features/core/not_found/PageNotFound.tsx";
import AuthenticatedUser from "./features/core/layouts/AuthenticatedUser.tsx";
import Header from "./features/core/header/Header.tsx";
import Footer from "./features/core/footer/Footer.tsx";
import LoadingSpinner from "./features/core/loading/LoadingSpinner.tsx";
import {setupInterceptors} from "./utils/axios_config/axiosInstance.ts";
import {useContext, useEffect} from "react";
import {AuthContext} from "./features/shared/context/AuthContext.tsx";
import Settings from "./features/users/settings/Settings.tsx";
import AboutUs from "./features/core/about_us/AboutUs.tsx";
import {UserContext} from "./features/shared/context/UserContext.tsx";

function App() {

  const authContext = useContext(AuthContext)!;
  const userContext = useContext(UserContext)!;

  useEffect(() => {
    setupInterceptors(authContext, userContext);
  }, []);

  return (
    <>
      <Header/>
        <LoadingSpinner/>
        <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route element={<GuestOnly/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<AuthenticatedUser/>}>
            <Route path="/settings" element={<Settings/>}/>
          </Route>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
