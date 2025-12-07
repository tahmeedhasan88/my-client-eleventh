import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();

    if(loading){
        return <div className='flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;