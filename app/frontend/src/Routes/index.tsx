import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { FirstAccess } from "../Pages/FirstAccess";
import { JoinCode } from "../Pages/JoinCode";
import { CreateBuilding } from "../Pages/CreateBuilding";
<<<<<<< HEAD
import { Building } from "../Pages/Building";
=======
import { News } from "../Pages/News";
>>>>>>> 4de6e383e7e14581de01c5d450a1ab6c2cf20ff6

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
<<<<<<< HEAD
        <Route path="/imoveis" element={<Building/>}/>
=======
        <Route path="/avisos" element={<News />}/>
>>>>>>> 4de6e383e7e14581de01c5d450a1ab6c2cf20ff6
      {/* </Route> */}

      {/* <Route path="/denied" element={<PermissionDenied />} /> */}
    </Switch>
  );
};

export default Routes;
