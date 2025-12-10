import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';
import LoaderComponent from '../Components/LoaderComponent';

const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation()

    if(loading){
        return <LoaderComponent></LoaderComponent>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;