
import Root from "../RootFile/Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Donor from "../Pages/Donor";
import PrivateRoute from "./PrivateRoute";
import DonationRequest from "../Pages/DonationRequest";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyDonationReqs from "../DashBoards/MyDonationReqs";
import FundingCollection from "../Pages/FundingCollection";
import PaymentSuccess from "../Pages/PaymentSuccess";
import AllUsers from "../Pages/AllUsers";
import AllDonationReqs from "../Pages/AllDonationReqs";
import AdminRoute from "./AdminRoute";
import DonorRoute from "./DonorRoute";
import { createBrowserRouter } from "react-router";
import AllDonationReqForVolun from "../Pages/AllDonationReqForVolun";



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
            path:'login',
            element:<LoginPage></LoginPage> , 

        },
        {
            path:'register',
            element:<RegisterPage></RegisterPage> , 

        },
        {
            path:'joinAsADonor',
            element:<PrivateRoute><Donor></Donor></PrivateRoute> , 
            loader: async () => {
            const districts = await fetch('/Districts.json').then(res => res.json());
            const upazilas = await fetch('/Upazila.json').then(res => res.json());

            return { districts, upazilas };
                                }

        },
        
        {
            path:'fundingCollection',
            element: <PrivateRoute><FundingCollection></FundingCollection></PrivateRoute>, 
            

        },
        {
            path:'payment-success',
            element: <PaymentSuccess></PaymentSuccess>
        },
    ]
  },
  {
    path: "/dashBoard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
    children: [
        {
            path: 'myDonationRequests',
            element: <DonorRoute><MyDonationReqs></MyDonationReqs></DonorRoute>,

        },
        {
            path: 'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,

        },
        {
            path: 'allDonationReqs',
            element: <AdminRoute><AllDonationReqs></AllDonationReqs></AdminRoute>,

        },
        {
            path:'donationRequest',
            element: <DonorRoute><DonationRequest></DonationRequest></DonorRoute> , 
            loader: async () => {
            const districts = await fetch('/Districts.json').then(res => res.json());
            const upazilas = await fetch('/Upazila.json').then(res => res.json());

            return { districts, upazilas };
                                }
        },
        {
            path: 'allDonationReqsForVolunteer',
            element: <AllDonationReqForVolun></AllDonationReqForVolun>,

        },
    ]
  },
]);