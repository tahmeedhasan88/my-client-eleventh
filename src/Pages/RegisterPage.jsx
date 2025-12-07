import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import SocialLogin from '../SocialLogIn/SocialLogin';

const RegisterPage = () => {

const { register, handleSubmit, formState:{errors} } = useForm()
const { registerUser } = UseAuth()

const handleRegister = (data) => {

    // console.log(data)
    registerUser(data.email, data.password)
    .then((userCredential) => { 
    const user = userCredential.user;
    // console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(errorCode)
  });

}


    return (
        <div className='flex flex-col items-center justify-center mb-20 mt-10'>
            <h2 className='text-2xl lg:text-3xl mb-3 font-bold text-white'>Register Now!!</h2> 
        
        <form onSubmit={handleSubmit(handleRegister)}>
            <div className='bg-white p-5 shadow-2xl rounded-[10px] flex flex-col gap-3'>
            
            <h3>Email</h3>
            <input type='email' {...register('email', {required:true})} placeholder='Your Email' className='input w-sm'></input>
            {errors.email?.type === 'required' && <p className='text-[12px] text-red-500'>Email Required</p>}

            
            <h3>Name</h3>
            <input type='text' {...register('name')} placeholder='Your Name' className='input w-sm'></input>

            <h3>Avatar</h3>
            <input type='file' {...register('photo', {required:true})} placeholder='Your Image' className='file-input w-sm'></input>
             {errors.photo?.type === 'required' && <p className='text-[12px] text-red-500'>Picture is required</p>}

            <h3>Blood Group</h3>
            <select className='input w-sm'>>
            <option value="">Select One</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="4">B+</option>
            <option value="5">B-</option>
            <option value="6">AB+</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
            </select>

            <h3>District</h3>
            <input type='text' {...register('district')} placeholder='Your Name' className='input w-sm'></input>

            <h3>Upazila</h3>
            <input type='text' {...register('upazila')} placeholder='Your Name' className='input w-sm'></input>
            
            <h3>Password</h3>
            <input type='password' {...register('password', {required:true, minLength:6,})} placeholder='Your Password' className='input w-sm'></input>
            {errors.password?.type === 'minLength' && <p className='text-[12px] text-red-500'>Password must be six characters</p>}

            <h3>Confirm Password</h3>
            <input type='password' {...register('confirm password')} placeholder='Confirm Password' className='input w-sm'></input>


            <button className='w-sm bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-[10px] btn mt-2'>Register</button>
            <SocialLogin></SocialLogin>
            <h4 className='text-center mt-2 font-semibold'>Already have an account? <Link to='/login'><span className='text-blue-500'>Log In</span></Link> </h4>
        </div>
        </form>




        </div>
    );
};

export default RegisterPage;