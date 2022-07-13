import {Route, Routes} from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import * as AdminPages from "./apps/Admin/pages/index";
import * as AuthPages from "./apps/Auth/pages/index";
import {Navigate} from "react-router-dom";
import BtnRoutes from "./components/BtnRoutes";
import React from "react";

function App() {
	return (
    <>
      <BtnRoutes/>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path={'/'} element={<AdminPages.Main/>}/>
          <Route path={'/add/category'} element={<AdminPages.AddCategories/>}/>
          <Route path={'/add/products'} element={<AdminPages.AddProduct/>}/>
          <Route path={'/edit/contacts'} element={<AdminPages.EditContacts/>}/>
          <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Route>
        <Route path={'/user/login'} element={<AuthPages.Login/>}/>
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
      </Routes>
    </>
	);
}

export default App;
