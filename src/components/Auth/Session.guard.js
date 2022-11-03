import React from 'react';
import { Route } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <r to='/' />
    )} />
)
console.log("🚀 ~ file: Session.guard.js ~ line 5 ~ GuardedRoute", GuardedRoute)

export default GuardedRoute;