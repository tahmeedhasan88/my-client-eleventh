import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import UseAxios from '../Hooks/UseAxios';
import { TiDelete } from 'react-icons/ti';
import Swal from 'sweetalert2';

const MyDonationReqs = () => {

     const {user} = UseAuth();
     const axiosSecure = UseAxios();
     const {data: donation = [], refetch} = useQuery({
            queryKey: ['myDonationRequests', user?.email],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/donation?email=${user.email}`);
                return res.data;
             }
        })

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
});

}


    return (

       

       <div className="m-5">
  <h2 className='text-white font-semibold text-2xl mb-4'>
    My Total Donation Request: <span className='text-blue-300'>{donation.length}</span>
  </h2>

  {/* Scrollable container for small screens */}
  <div className="overflow-x-auto">
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
        {donation.map(donation => (
          <tr key={donation._id} className="bg-gray-800 hover:bg-gray-900">
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentName}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentDistrict}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.recipentUpazila}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.bloodGroup}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.donationDate}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">{donation.donationTime}</td>
            <td className="p-2 md:p-3 border text-white border-white text-sm md:text-base">
              <span className="px-2 py-1 rounded text-white text-xs md:text-sm bg-yellow-500">{donation.status}</span>
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
</div>

    );
};

export default MyDonationReqs;