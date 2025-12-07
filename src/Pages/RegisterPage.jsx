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
            <h2 className='text-2xl lg:text-3xl mb-3 font-bold text-white'>Register Now</h2> 
        
        <form onSubmit={handleSubmit(handleRegister)}>
            <div className='bg-white p-5 shadow-2xl rounded-[10px] flex flex-col gap-3'>
            <h3>Name</h3>
            <input type='text' {...register('name')} placeholder='Your Name' className='input w-sm'></input>
            <h3>Email</h3>
            <input type='email' {...register('email', {required:true})} placeholder='Your Email' className='input w-sm'></input>
            {errors.email?.type === 'required' && <p className='text-[12px] text-red-500'>Email Required</p>}
            <h3>Password</h3>
            <input type='password' {...register('password', {required:true, minLength:6,})} placeholder='Your Password' className='input w-sm'></input>
            {errors.password?.type === 'minLength' && <p className='text-[12px] text-red-500'>Password must be six characters</p>}
            <h3>Photo</h3>
            <input type='text' {...register('photo')} placeholder='Photo Url' className='input w-sm'></input>
            <button className='w-sm bg-black text-white py-3 rounded-[10px] btn mt-2'>Register</button>
            <SocialLogin></SocialLogin>
            <h4 className='text-center mt-2 font-semibold'>Already have an account? <Link to='/login'><span className='text-[#1F2B43]'>Log In</span></Link> </h4>
        </div>
        </form>




        </div>
    );
};

export default RegisterPage;