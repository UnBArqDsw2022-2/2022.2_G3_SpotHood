import React from 'react';
import { BrowserRouter, Route, Routes as Switch, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
const Routes = () => {
    const location = useLocation();
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;