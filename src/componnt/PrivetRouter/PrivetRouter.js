import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivetRouter = ({ children, ...rest }) => {
    const {user,loading} =useAuth()
    console.log(user)
    if (loading) return 'loading';
    return (
        
            <Route
            {...rest}
                render={({ location }) =>user.email || user.displayName ? children
                :
                <Redirect 
                to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                /> 
                }
            >
                
            </Route>
        
    );
};

export default PrivetRouter;