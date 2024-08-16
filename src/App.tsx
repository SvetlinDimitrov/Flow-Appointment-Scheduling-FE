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
import Profile from "./features/users/settings/Profile.tsx";
import AboutUs from "./features/core/about_us/AboutUs.tsx";
import {UserAuthContext} from "./features/shared/context/UserAuthContext.tsx";
import ContactUs from "./features/core/contact_us/ContactUs.tsx";
import LeftSidebar from "./features/core/side_bar/LeftSidebar.tsx";
import AppointmentInfo from "./features/appointments/appointment_info/AppointmentInfo.tsx";
import {Box} from "@mui/material";
import Service from "./features/services/Service.tsx";

function App() {

  const userContext = useContext(UserAuthContext)!;

  useEffect(() => {
    setupInterceptors(userContext);
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header/>
      <LeftSidebar/>
      <LoadingSpinner/>
      <Box flexGrow={1}>
        <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route element={<GuestOnly/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<AuthenticatedUser/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/appointments" element={<AppointmentInfo/>}/>
            <Route path="/services" element={<Service/>}/>
          </Route>
        </Routes>
      </Box>
      <Footer/>
    </Box>
  )
}

export default App
