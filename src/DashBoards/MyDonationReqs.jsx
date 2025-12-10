import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import UseAxios from '../Hooks/UseAxios';

const MyDonationReqs = () => {

     const {user} = UseAuth();
     const axiosSecure = UseAxios();
     const {data: donation = []} = useQuery({
            queryKey: ['myDonationRequests', user?.email],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/donation?email=${user.email}`);
                return res.data;

            }
        })



    return (

       

        <div>
            my donation requests {donation.length}
        </div>
    );
};

export default MyDonationReqs;