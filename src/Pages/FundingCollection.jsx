import React from 'react';
import UseAxios from '../Hooks/UseAxios';
import { Link } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import { FaHeart } from 'react-icons/fa';
import ContactUs from '../Components/ContactUs';

const FundingCollection = () => {


    const axiosSecure = UseAxios();
    const {user} = UseAuth()

    const {data: fundings = []} = useQuery({
        enabled: !!user?.email,
        queryKey: ['my-fundings', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('https://my-server-eleventh.onrender.com/fund-details')

            return res.data;
        }
    })
    const {data: fundingHistory = []} = useQuery({
        queryKey: ['funding-history', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('https://my-server-eleventh.onrender.com/allFundings')

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


                <marquee><p className='font-semibold text-yellow-300 text-[15px] animate-ping'>Select any amount from here according to your desire!!    
                Select any amount from here according to your desire!!    
                Select any amount from here according to your desire!!
                Select any amount from here according to your desire!!</p>
                </marquee>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {fundings.map(dt => (
                <div
                  key={dt._id}
                  className="w-full rounded-2xl p-6 bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-300 shadow-lg flex flex-col justify-between"
                >
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Donate Now
            </h2>

            {/* Amount */}
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-bold text-teal-600">
                {dt.fundingAmount}
              </span>
              <span className="text-lg font-semibold text-gray-700">
                TK
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-black text-lg font-medium mb-6">
              {dt.fundingName}
            </p>

            {/* Button */}
            <button
              onClick={() => handleFund(dt)}
              className="w-full bg-[#1F2B43] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span><FaHeart></FaHeart></span>
             Click To Fund
             </button>
    </div>
  ))}
</div>


                   
                </div>

                <div>
                    <div className="bg-white text-black p-4 rounded-lg mt-5">
                        <h3 className="text-xl font-semibold mb-4">Recent Funding</h3>

                        <div className="space-y-2">
                            {fundingHistory.map(fund => (
                                <div className="border p-3 rounded-lg" key={fund._id}>
                                    <p><strong>Email:</strong> {fund.email}</p>
                                    <p><strong>Amount:</strong> ${fund.amount}</p>
                                    <p><strong>Date: </strong>{fund.date}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

              <ContactUs></ContactUs>

                </div>
        </div>
    );
};

export default FundingCollection;