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

  const changeRole = async (id, role) => {
  const updatedUser = await axiosSecure.patch(`/users/${role}/${id}`);
  queryClient.setQueryData(['users'], old =>
    old.map(u => (u._id === id ? updatedUser.data : u))
      
  );
  console.log('Updated User:', updatedUser.data)
  refetch(); 
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
                        <h1 className='text-2xl font-bold lg:text-3xl'>1200</h1>
                        <h4 className=''>Donors</h4>
                    </div>
                </div>
                
                <div className='flex items-center gap-2 lg:gap-4 bg-[#1F2B43] p-5 rounded-[10px] lg:p-10 shadow-2xl lg:px-15'>
                    <TbCoinTaka className='text-green-400 size-9 lg:size-12'></TbCoinTaka>
                
                    <div className='text-white'>
                        <h2 className='text-xl lg:text-xl'>Total Funding</h2>
                        <h1 className='text-2xl font-bold lg:text-3xl'>1200</h1>
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



        {/* -----------end     */}
        </div>
    );
};

export default AdminDashBoard;