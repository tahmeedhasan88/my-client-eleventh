import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbCoinTaka } from 'react-icons/tb';
import UseAuth from '../Hooks/UseAuth';
import UseAxios from '../Hooks/UseAxios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { TiDelete } from 'react-icons/ti';

const AdminDashBoard = () => {

  const { user } = UseAuth();
  const axiosSecure = UseAxios();
  const queryClient = useQueryClient();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
      
    }
   
  });

  const donorCount = users.filter(user => user.role === 'donor').length;


  const {data: fundingHistory = []} = useQuery({
          queryKey: ['funding-history', user?.email],
          queryFn: async()=>{
              const res = await axiosSecure.get('https://my-server-eleventh.onrender.com/allFundings')
  
              return res.data;
          }
      })

    const totalFundingAmount = fundingHistory.reduce(
    (total, fund) => total + Number(fund.amount),
    0
    );


  const changeRole = async (id, role) => {
  const updatedUser = await axiosSecure.patch(`/users/${role}/${id}`);
  queryClient.setQueryData(['users'], old =>
    old.map(u => (u._id === id ? updatedUser.data : u))
      
  );
  console.log('Updated User:', updatedUser.data)
  refetch(); 
};





const { data: donations = []} = useQuery({
    queryKey: ['allDonations'],
    queryFn: async () => {
      const res = await axiosSecure.get('/donation');
      return res.data;
    }
  });



const handleDeleteReq = (id) =>{
    console.log(id)

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.delete(`/donation/${id}`)
    .then(res=>{
        console.log(res)

    if(res.data.deletedCount){
        refetch();
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
    })
    .catch(error=>{
        console.log(error)
    })
    
   
  }
}); }

    const getStatusColor = (status) => {
    switch (status) {
    case 'pending':
    return 'bg-yellow-500';
    case 'Inprogress':
    return 'bg-blue-500';
    case 'Done':
    return 'bg-green-600';
    case 'Canceled':
    return 'bg-red-600';
    default:
    return 'bg-gray-500';
    }
    };

    return (
        <div>
            <div className='text-3xl lg:text-4xl font-bold text-white p-10 flex items-center gap-2 '><h2>Admin Dashboard</h2>
            <MdAdminPanelSettings className='text-green-400'></MdAdminPanelSettings></div>


{/* ----------------Board portion--------------------- */}

            <div className='flex gap-5 items-center justify-center lg:gap-10'>

                <div className='flex items-center gap-2 lg:gap-4 bg-[#1F2B43] p-5 rounded-[10px] lg:py-10 lg:px-15 shadow-2xl'>
                    <FaRegCircleUser className='text-green-400 size-7 lg:size-10'></FaRegCircleUser>
                    <div className='text-white'>
                        <h2 className='text-xl lg:text-xl'>Total Donors</h2>
                        <h1 className='text-2xl font-bold lg:text-3xl'>{donorCount}</h1>
                        <h4 className=''>Donors</h4>
                    </div>
                </div>
                
                <div className='flex items-center gap-2 lg:gap-4 bg-[#1F2B43] p-5 rounded-[10px] lg:p-10 shadow-2xl lg:px-15'>
                    <TbCoinTaka className='text-green-400 size-9 lg:size-12'></TbCoinTaka>
                
                    <div className='text-white'>
                        <h2 className='text-xl lg:text-xl'>Total Funding</h2>
                        <h1 className='text-2xl font-bold lg:text-3xl'>{totalFundingAmount}</h1>
                        <h4 className=''>Taka</h4>
                    </div>
                </div>

                
            </div>

{/* ----------------------end board------------------ */}




{/* ----------------Table of users---------------- */}

        <div className="p-5 my-10">
              <h2 className="text-2xl font-bold mb-5 text-white">All Users</h2>
        
              <div className="overflow-x-auto bg-[#1F2B43] ">
                <table className="table w-full">
                  <thead className="text-white">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Current Role</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
        
                  <tbody className="bg-gray-800 text-white">
                    {users.slice(0, 3).map(u => (
                      <tr key={u._id}>
        
        
        
                        <td>{u.displayName}</td>
        
                        <td>{u.email}</td>
        
                        {/* Present Role */}
                        <td className="capitalize font-medium">
                          {u.role}
                        </td>
        
                        {/* Dropdown Action */}
                        <td className="text-right">
                          <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-sm">
                              <BsThreeDotsVertical size={18} />
                            </label>
        
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 text-black"
                            >
                              {u.role !== 'admin' && (
                                <li>
                                  <button onClick={() => changeRole(u._id, 'admin')}>
                                    Make Admin
                                  </button>
                                </li>
                              )}
        
                              {u.role !== 'donor' && (
                                <li>
                                  <button onClick={() => changeRole(u._id, 'donor')}>
                                    Make Donor
                                  </button>
                                </li>
                              )}
        
                              {u.role !== 'volunteer' && (
                                <li>
                                  <button onClick={() => changeRole(u._id, 'volunteer')}>
                                    Make Volunteer
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex items-center justify-center'>
                <Link to=''><button className='px-3 py-1 rounded-[10px] mt-5 bg-green-400 text-white lg:px-6 lg:py-2 font-semibold'>See All</button></Link>
              </div>
        </div>
{/* -------------User table end------------------ */}



{/* --------------Donation Request table---------------- */}
<div>
    <h2 className="text-2xl font-bold mb-5 text-white px-5">All Donation Requests</h2>

    <div className="overflow-x-auto mx-5">
        <table className="table w-full border border-white min-w-[700px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Recipient Name</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">District</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Upazila</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Blood Group</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Date</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Time</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Status</th>
              <th className="p-2 md:p-3 border font-semibold text-sm md:text-base">Decision</th>
            </tr>
          </thead>
    
          <tbody>
            {donations.slice(0, 3).map(donation => (
              <tr key={donation._id} className="bg-gray-800 hover:bg-gray-900">
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentName}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentDistrict}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentUpazila}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.bloodGroup}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.donationDate}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.donationTime}</td>
                <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">
                  <span className={`px-2 py-1 rounded text-white ml-5 ${getStatusColor(donation.status)}`}>
                        {donation.status}
                  </span>
                </td>
                <td className="p-2 md:p-3 border text-red-600 hover:text-red-400 border-white text-sm md:text-base">
                  <button onClick={() => handleDeleteReq(donation._id)}>
                    <TiDelete className='size-7'></TiDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className='flex items-center justify-center mb-10'>
        <Link to=''><button className='px-3 py-1 rounded-[10px] mt-5 bg-green-400 text-white lg:px-6 lg:py-2 font-semibold'>See All</button></Link>
        </div>
</div>


{/* ---------------donation req end--------------------- */}


        {/* -----------end     */}
        </div>
    );
};

export default AdminDashBoard;