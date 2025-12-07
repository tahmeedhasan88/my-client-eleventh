import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../Hooks/UseAuth';

const SocialLogin = () => {

const { signInGoogle } = UseAuth();

const handleGoogleSignIn = () => {
signInGoogle()
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
        <div>
            <p className='font-semibold text-center'>Or</p>
            <button onClick={handleGoogleSignIn} className='w-sm py-2 rounded-[10px] border btn'><FcGoogle></FcGoogle> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;