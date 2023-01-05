import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/signup";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route> */}

      {/* <Route path="login" element={<PublicRoutes />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/criar-conta" element={<Signup />} />
      {/* </Route> */}

      {/* <Route path="/denied" element={<PermissionDenied />} /> */}
    </Switch>
  );
};

export default Routes;
