import React from "react";
import { Route, Redirect } from 'react-router-dom';
const isLogin = true;
const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin ? <Component {...props}/>
            : <Redirect to="/" />)
        }
        />
    );
};
export default PrivateRouter