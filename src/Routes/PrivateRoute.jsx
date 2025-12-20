import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';


const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation()

    if(loading){
        return <div className='flex items-center justify-center h-[500px]'>
            <img className='h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] animate-spin' src='/myLogo-Photoroom.png'></img>
            </div>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;