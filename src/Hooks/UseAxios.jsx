import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import UseAuth from './UseAuth';


const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  
});


const UseAxios = () => {

const {user} = UseAuth();

useEffect(()=>{
  axiosSecure.interceptors.request.use(config =>{
    config.headers.Authorization = `Bearer ${user?.accessToken}`
    return config
  })


},[user])



    return axiosSecure;
};

export default UseAxios;