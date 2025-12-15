import React from 'react';
import UseAxios from '../Hooks/UseAxios';
import { Link } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';

const FundingCollection = () => {


    const axiosSecure = UseAxios();
    const {user} = UseAuth()

    const {data: fundings = []} = useQuery({
        queryKey: ['my-fundings', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('http://localhost:3000/fund-details')

            return res.data;
        }
    })

    const handleFund = async (selectedFund) => {

    const paymentInfo = {
        cost: selectedFund.fundingAmount,
        fundingId: selectedFund._id,
        customerEmail: user.email,
        fundName: 'Funding'
    }

    try {
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        window.location.href = res.data.url; 
    } catch (error) {
        console.error(error);
        alert("Payment session failed. Check backend logs.");
    }
}

    
    
    return (
        <div>
            <div className='text-white p-5 lg:p-10 flex flex-col gap-2'>
                <h2 className='text-xl lg:text-2xl font-semibold '>Funding Page</h2>
                <div>
                    <h3 className='text-2xl lg:text-3xl font-semibold '>Invest in Hope. Support Our Cause.</h3>
                <h3 className='mt-10 text-yellow-200 text-[16px]'>Select any amount of TK from here according to your desire!!</h3>
                    <div className='flex gap-4 mb-10'>

        

                            {
                    fundings.map(dt => 
                        <button 
                            key={dt._id} 
                            onClick={() => handleFund(dt)} 
                            className='bg-blue-400 px-3 py-1 font-semibold rounded-[10px] lg:px-8 lg:py-2'
                        >
                            {dt.fundingAmount}
                        </button>
                            )
                            }

                    </div>

                   
                </div>

                <div>

                    <div className="bg-white text-black p-4 rounded-lg mt-5">
                        <h3 className="text-xl font-semibold mb-4">Recent Funding</h3>

                        <div className="space-y-2">
                            {fundings.map(fund => (
                                <div className="border p-3 rounded-lg" key={fund._id}>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Amount:</strong> ${fund.fundingAmount}</p>
                                    <p><strong>Date: </strong>{new Date().toISOString().slice(0, 10)}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>



                </div>



            </div>
        </div>
    );
};

export default FundingCollection;