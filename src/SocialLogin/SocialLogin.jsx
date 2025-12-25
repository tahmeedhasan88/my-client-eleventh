import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../Hooks/UseAuth';
import UseAxios from '../Hooks/UseAxios';

const SocialLogin = () => {

const { signInGoogle, user } = UseAuth();
const axiosSecure = UseAxios();

const handleGoogleSignIn = () => {
signInGoogle()
.then((userCredential) => { 
    const ttUser = userCredential.user;
    // console.log(user)
     const userInfo = {
     email: user.email,
     displayName: user.displayName,
     photoURL: user.photoURL
   }
   axiosSecure.post('/users', userInfo)
   .then(res=>{console.log('user data has been started', res.data)

   })
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(errorCode)
  });
}

    return (
        <div>
            <p className='font-semibold text-center'>Or</p>
            <button onClick={handleGoogleSignIn} className='w-sm py-2 rounded-[10px] border btn bg-white text-black'><FcGoogle></FcGoogle> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;