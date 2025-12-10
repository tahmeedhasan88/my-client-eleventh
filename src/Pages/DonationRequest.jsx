import React from 'react';
import ContactUs from '../Components/ContactUs';
import { useForm } from 'react-hook-form';
import UseAuth from '../Hooks/UseAuth';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import UseAxios from '../Hooks/UseAxios';

const DonationRequest = () => {

const {user} = UseAuth()
const { register, handleSubmit, watch,  formState: {error}} =useForm();
const { districts, upazilas } = useLoaderData();
const districtsName= districts.map(d=> d.name);
const axiosSecure = UseAxios()

const selectDistrict = watch('recipentDistrict')

const filterUpazilas = React.useMemo(()=>{
    if(!selectDistrict) return [];

    const districtObj = districts.find(d => d.name === selectDistrict);
  if (!districtObj) return [];
  return upazilas.filter(u => u.district_id === districtObj.id)
},[selectDistrict, districts, upazilas])




const handleSubmitRequest = (data) =>{
console.log(data)
Swal.fire({
        icon: 'success', // This gives the green checkmark icon
        title: 'Request Submitted Successfully!',
        text: 'Your blood donation request has been received. You will be notified when a donor is found.',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#10B981' // Tailwind green-500 or similar
    });
axiosSecure.post('/donation', data)
.then(res=>{
    console.log('after saving donation', res.data)
})

}

    return (
        <div>

        <form onSubmit={handleSubmit(handleSubmitRequest)} className="max-w-6xl mx-auto p-6 text-white rounded-xl shadow-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Create Donation Request</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="form-control">
            <label className="label mr-4">Requester Name</label>
            <input type="text" value={user?.displayName} {...register('requesterName')} className="input input-bordered text-black" readOnly />
          </div>

          <div className="form-control">
            <label className="label mr-4">Requester Email</label>
            <input type="email" value={user?.email} {...register('requesterEmail')} className="input input-bordered text-black" readOnly />
          </div>

          <div className="form-control">
            <label className="label mr-4">Recipient Name</label>
            <input type="text" {...register('recipentName')} placeholder="Recipient Name" className="input input-bordered text-black" />
          </div>

          <div className="flex gap-2">
            <label className="label mr-4">Recipient District</label>
             <select defaultValue="Server location" {...register('recipentDistrict')} className="select select-neutral text-black bg-white">
            <option>Select a district</option>
            {
                districtsName.map((d, i)=><option key={i} value={d} >{d}</option>)
            }
            </select>
          </div>

          

          <div className="form-control">
            <label className="label mr-4">Recipient Upazila</label>

            <select defaultValue="Server location"  {...register('recipentUpazila')} className="select select-neutral text-black bg-white">
            <option>Select a district</option>
            {
                filterUpazilas.map((u, i)=><option key={i} value={u.name} >{u.name}</option>)
            }
            </select>
          </div>

          <div className="form-control">
            <label className="label mr-4">Hospital Name</label>
            <input type="text" {...register('hospitalName')} placeholder="Hospital Name" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Full Address Line</label>
            <input type="text" {...register('fullAddress')} placeholder="Full Address" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Request Message</label>
            <input type="text" {...register('requestMessage')} placeholder="Write your message..." className="input input-bordered text-black" />
          </div>
        </div>

        <div className="space-y-4">

          <div className="form-control">
            <label className="label mr-4">Blood Group</label>
            <select {...register('bloodGroup')} className='select select-neutral text-black bg-white'>
            <option value="">Select One</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            </select>
          </div>

          

          <div className="form-control">
            <label className="label mr-4">Donation Date</label>
            <input type="date" {...register('donationDate')} className="input input-bordered text-black" />
          </div>

          <div className="">
            <div className="form-control">
              <label className="label mr-4">Time</label>
              <input type="time" {...register('donationTime')} className="input input-bordered text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="py-2 rounded-[10px] font-semibold bg-blue-500 hover:bg-blue-600 text-white w-full">Submit Request</button>
      </div>
    </form>


         {/* Hero Section */}

       <ContactUs></ContactUs>


        </div>
    );
};

export default DonationRequest;