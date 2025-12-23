import React from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        <div className='flex items-center justify-center h-[500px] lg:h-[700px]'>

           <div className='h-[300px] w-[270px] lg:h-[400px] lg:w-[350px] bg-white rounded-[10px] shadow-2xl flex flex-col items-center justify-center gap-2 p-5'>
            <FaMoneyCheck className='size-10 lg:size-13  text-green-600'></FaMoneyCheck>
            <div className='flex items-center gap-2'><h2 className='text-xl font-bold lg:text-2xl'>Payment Successful</h2> <FaCircleCheck className='text-green-900'></FaCircleCheck></div>
            <p>Go Back To Home</p>
            <Link to='/fundingCollection'><button className='px-3 py-1 rounded-[10px] mt-5 bg-blue-400 text-white lg:px-6 lg:py-2 font-semibold'>Go Back</button></Link>
           </div>

        </div>
    );
};

export default PaymentSuccess;