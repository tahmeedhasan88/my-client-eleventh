import { createBrowserRouter } from "react-router";
import Root from "../RootFile/Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Donor from "../Pages/Donor";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <HomePage></HomePage> , 

        },
        {
            path:'/login',
            element:<LoginPage></LoginPage> , 

        },
        {
            path:'/register',
            element:<RegisterPage></RegisterPage> , 

        },
        {
            path:'/joinAsADonor',
            element:<PrivateRoute><Donor></Donor></PrivateRoute> , 

        },
    ]
  },
]);