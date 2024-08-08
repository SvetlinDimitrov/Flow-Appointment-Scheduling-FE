import {Route, Routes} from "react-router-dom";
import Home from "./features/core/home/Home.tsx";
import GuestOnly from "./features/shared/layouts/GuestOnly.tsx";
import Login from "./features/users/login/Login.tsx";
import Register from "./features/users/register/Register.tsx";
import PageNotFound from "./features/core/page_not_found/PageNotFound.tsx";
import AuthenticatedUser from "./features/shared/layouts/AuthenticatedUser.tsx";
import Service from "./features/services/Service.tsx";
import Header from "./features/shared/header/Header.tsx";

function App() {

  return (
    <>
      <Header/>
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
    </>
  )
}

export default App
