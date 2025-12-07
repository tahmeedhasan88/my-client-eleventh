import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import SocialLogin from '../SocialLogIn/SocialLogin';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();
    const { signInUser, sendResetOTP, verifyOTP } = UseAuth();

    // Password show/hide
    const [showPassword, setShowPassword] = useState(false);

    // Forget password states
    const [openModal, setOpenModal] = useState(false);
    const [emailForOTP, setEmailForOTP] = useState("");
    const [otpModal, setOtpModal] = useState(false);
    const [otp, setOtp] = useState("");

    // Your OLD login function (not changed)
    const handleLogin = (data) => {
        // console.log(data)
        signInUser(data.email, data.password)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
        });
    };

    // NEW → Send OTP
    const handleSendOTP = () => {
        if (!emailForOTP) {
            alert("Please enter your email!");
            return;
        }

        sendResetOTP(emailForOTP)
        .then(() => {
            alert("OTP sent to your email!");
            setOpenModal(false);
            setOtpModal(true);
        })
        .catch((error) => {
            console.log(error);
            alert("Failed to send OTP");
        });
    };

    // NEW → Verify OTP
    const handleVerifyOTP = () => {
        verifyOTP(emailForOTP, otp)
        .then(() => {
            alert("OTP Verified! Now reset your password.");
            setOtpModal(false);
            // You can open another modal to set a new password
        })
        .catch(() => {
            alert("Invalid OTP, try again.");
        });
    };


    return (
        <div className='flex flex-col items-center justify-center mb-20 mt-10'>
            <h2 className='text-2xl lg:text-3xl mb-3 font-bold text-white'>Login Now!!</h2> 
        
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className='bg-white p-5 rounded-[10px] flex flex-col gap-3 shadow-2xl'>
                    
                    <h3>Email</h3>
                    <input 
                        type='email' 
                        {...register('email', {required:true})} 
                        placeholder='Your Email' 
                        className='input w-sm'
                    />
                    {errors.email?.type === 'required' && 
                        <p className='text-[12px] text-red-500'>Email is required</p>
                    }

                    <h3>Password</h3>
                    <div className='relative'>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', {required:true, minLength:6})}
                            placeholder='Your Password'
                            className='input w-sm'
                        />

                        {/* Eye Icon */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {errors.password?.type === 'minLength' && 
                        <p className='text-[12px] text-red-500'>Password must be six characters</p>
                    }

                    {/* Forget Password */}
                    <h4 
                        className='text-[12px] text-blue-600 cursor-pointer'
                        onClick={() => setOpenModal(true)}
                    >
                        Forget Password?
                    </h4>

                    <button className='w-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-[10px]'>Log In</button>

                    <SocialLogin />

                    <h4 className='text-center mt-2 font-semibold'>
                        Didn't have an account? 
                        <Link to='/register'>
                            <span className='text-blue-500'> Register</span>
                        </Link>
                    </h4>
                </div>
            </form>


            {/* ================= EMAIL FOR OTP MODAL ================= */}
            {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Reset Password</h2>

                <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={emailForOTP}
                    onChange={(e) => setEmailForOTP(e.target.value)}
                    className="input w-full"
                />

                <button
                    className="bg-black text-white py-2 rounded-md"
                    onClick={handleSendOTP}
                >
                    Send OTP
                </button>

                <button 
                    onClick={() => setOpenModal(false)} 
                    className="text-red-600 mt-2"
                >
                    Close
                </button>
            </div>
        </div>
            )}

            {/* ================= OTP VERIFY MODAL ================= */}
            {otpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Verify OTP</h2>

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="input w-full"
                />

                <button
                    className="bg-green-600 text-white py-2 rounded-md"
                    onClick={handleVerifyOTP}
                >
                    Verify OTP
                </button>

                <button 
                    onClick={() => setOtpModal(false)} 
                    className="text-red-600 mt-2"
                >
                    Close
                </button>
            </div>
        </div>
            )}

        </div>
    );
};

export default LoginPage;
