import {Route, Routes} from "react-router-dom";
import Home from "./shared/core/home/Home.tsx";
import GuestRoutes from "./shared/core/layouts/GuestRoutes.tsx";
import Login from "./features/guest/login/Login.tsx";
import Register from "./features/guest/register/Register.tsx";
import PageNotFound from "./shared/core/not-found/PageNotFound.tsx";
import AuthenticatedUser from "./shared/core/layouts/AuthenticatedUser.tsx";
import Header from "./shared/core/header/Header.tsx";
import Footer from "./shared/core/footer/Footer.tsx";
import LoadingSpinner from "./shared/core/loading/LoadingSpinner.tsx";
import {setupInterceptors} from "./utils/axios-config/axiosInstance.ts";
import {useContext, useEffect} from "react";
import Profile from "./features/users/settings/Profile.tsx";
import AboutUs from "./features/guest/about-us/AboutUs.tsx";
import {UserAuthContext} from "./shared/context/UserAuthContext.tsx";
import ContactUs from "./features/guest/contact-us/ContactUs.tsx";
import AppointmentInfo from "./features/appointment/appointment-info/AppointmentInfo.tsx";
import {Box} from "@mui/material";
import AppointmentDetails from "./features/appointment/appointment-info/detailed-appointment/AppointmentDetails.tsx";
import AdminRoutes from "./shared/core/layouts/AdminRoutes.tsx";
import AdminServiceDashboard from "./features/admin/service-dashboard/AdminServiceDashboard.tsx";
import AdminDashboardUsers from "./features/admin/user-dashboard/AdminDashboardUsers.tsx";
import ServicePage from "./features/guest/service-id/ServiceIdPage.tsx";
import StaffRoutes from "./shared/core/layouts/StaffRoutes.tsx";
import ClientRoutes from "./shared/core/layouts/ClientRoutes.tsx";

function App() {

  const userContext = useContext(UserAuthContext)!;

  useEffect(() => {
    setupInterceptors(userContext);
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" minWidth={"280px"}>
      <Header/>
      <LoadingSpinner/>
      <Box flexGrow={1}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route element={<GuestRoutes/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<AuthenticatedUser/>}>
            <Route element={<AdminRoutes/>}>
              <Route path="/admin/services" element={<AdminServiceDashboard/>}/>
              <Route path="/admin/users" element={<AdminDashboardUsers/>}/>
            </Route>
            <Route element={<StaffRoutes/>}>
              <Route path="/staff/appointments" element={<AppointmentInfo/>}/>
              <Route path="/staff/appointments/:id" element={<AppointmentDetails/>}/>
            </Route>
            <Route element={<ClientRoutes/>}>
              <Route path="/appointments" element={<AppointmentInfo/>}/>
              <Route path="/appointments/:id" element={<AppointmentDetails/>}/>
            </Route>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/service/:id" element={<ServicePage/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Box>
      <Footer/>
    </Box>
  )
}

export default App;