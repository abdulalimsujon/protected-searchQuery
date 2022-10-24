import React from 'react';
import { Navigate } from 'react-router-dom';


const RequireAuth = ({ logged = false, children }) => {
    if (!logged) {
        return <Navigate to='/home' replace></Navigate>
    }
    return children;

}

export default RequireAuth;