import {Route, Routes} from "react-router-dom";
import Home from "./features/core/home/Home.tsx";
import GuestOnly from "./features/core/layouts/GuestOnly.tsx";
import Login from "./features/users/login/Login.tsx";
import Register from "./features/users/register/Register.tsx";
import PageNotFound from "./features/core/page_not_found/PageNotFound.tsx";
import AuthenticatedUser from "./features/core/layouts/AuthenticatedUser.tsx";
import Service from "./features/services/Service.tsx";
import Header from "./features/core/header/Header.tsx";
import Footer from "./features/core/footer/Footer.tsx";
import LoadingSpinner from "./features/core/loading/LoadingSpinner.tsx";
import ToasterProvider from "./features/shared/context/ToasterContext.tsx";

function App() {

  return (
    <>
      <Header/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '86vh'}}>
        <LoadingSpinner/>
        <ToasterProvider>
          <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route element={<GuestOnly/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
        <Route element={<AuthenticatedUser/>}>
          <Route path="/authed" element={<Service/>}/>
        </Route>
      </Routes>
        </ToasterProvider>
      </div>
      <Footer/>
    </>
  )
}

export default App
