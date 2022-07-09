import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, ...rest }) => {
    if (!localStorage.getItem('token')) {
        return <Redirect to="/signin" />;
    } else {
        return <Route path={path} component={Component} {...rest} />;
    }
};

export default PrivateRoute;