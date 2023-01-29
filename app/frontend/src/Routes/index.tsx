import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { FirstAccess } from "../Pages/FirstAccess";
import { JoinCode } from "../Pages/JoinCode";
import { CreateBuilding } from "../Pages/CreateBuilding";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route> */}

      {/* <Route path="login" element={<PublicRoutes />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/criar-conta" element={<Signup />} />
        <Route path="/primeiro-acesso" element={<FirstAccess />} />
        <Route path="/codigo-acesso" element={<JoinCode />} />
        <Route path="/cadastrar-imovel" element={<CreateBuilding />}/>
      {/* </Route> */}

      {/* <Route path="/denied" element={<PermissionDenied />} /> */}
    </Switch>
  );
};

export default Routes;
