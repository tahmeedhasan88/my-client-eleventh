import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import UseAxios from '../Hooks/UseAxios';
import ContactUs from '../Components/ContactUs';
import Swal from 'sweetalert2';

const Donor = () => {

const {user} = UseAuth();
const { register, handleSubmit, watch,  formState: {errors}} =useForm();
const { districts, upazilas } = useLoaderData();
const districtsName= districts.map(d=> d.name);
const axiosSecure = UseAxios()

const selectDistrict = watch('donorDistrict')

const filterUpazilas = React.useMemo(()=>{
    if(!selectDistrict) return [];

    const districtObj = districts.find(d => d.name === selectDistrict);
  if (!districtObj) return [];
  return upazilas.filter(u => u.district_id === districtObj.id)
},[selectDistrict, districts, upazilas])




const handleDonorApp = (data) =>{

console.log(data)
axiosSecure.post('/donors', data)
.then(res=>{
    if(res.data.insertedId){

        Swal.fire({
        icon: 'success',
        title: 'Apply Submitted Successfully!',
        text: 'Your apply has been received. You will be notified when an admin will accept.',
        confirmButtonText: 'Okay!',
        confirmButtonColor: '#10B981'
    });

    }
})
}

    return (
       <div>

        <form onSubmit={handleSubmit(handleDonorApp)} className="max-w-6xl mx-auto p-6 text-white rounded-xl shadow-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Be a Donor</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="form-control">
            <label className="label mr-4">Donor Name</label>
            <input type="text" value={user?.displayName} {...register('donorName')} className="input input-bordered text-black" readOnly />
          </div>

          <div className="form-control">
            <label className="label mr-4">Donor Email</label>
            <input type="email" value={user?.email} {...register('donorEmail')} className="input input-bordered text-black" readOnly />
          </div>


          <div className="form-control">
            <label className="label mr-4">Donor District</label>
             <select defaultValue="Server location" {...register('donorDistrict')} className="select select-neutral text-black bg-white">
            <option>Select a district</option>
            {
                districtsName.map((d, i)=><option key={i} value={d} >{d}</option>)
            }
            </select>
          </div>

          

          <div className="form-control">
            <label className="label mr-4">Donor Upazila</label>

            <select defaultValue="Server location"  {...register('donorUpazila')} className="select select-neutral text-black bg-white">
            <option>Select a district</option>
            {
                filterUpazilas.map((u, i)=><option key={i} value={u.name} >{u.name}</option>)
            }
            </select>
          </div>


          <div className="form-control">
            <label className="label mr-4">Full Address Line</label>
            <input type="text" {...register('fullAddress')} placeholder="Full Address" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">NID Number</label>
            <input type="number" {...register('nidNumber')} placeholder="Give digits of your NID" className="input input-bordered text-black" />
          </div>

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
            <label className="label mr-4">Apply Date</label>
            <input type="date" {...register('applyDate')} className="input input-bordered text-black" />
          </div>
        </div>

        <div className="flex items-center justify-center">

          <img className='h-[200px] lg:h-[300px]' src='/Donorimg.png'></img>

        </div>
      </div>

      <div className="mt-6">
        <button className="py-2 rounded-[10px] font-semibold bg-blue-500 hover:bg-blue-600 text-white w-full">Apply As a Donor</button>
      </div>
    </form>


         {/* Hero Section */}

       <ContactUs></ContactUs>


        </div>
    );
};

export default Donor;