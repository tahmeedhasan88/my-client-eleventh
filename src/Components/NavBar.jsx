import React from 'react';
import { Link, NavLink } from 'react-router';
import UseAuth from '../Hooks/UseAuth';

const NavBar = () => {

  const {user, logOut} = UseAuth();

  const handleLogOut = () => {
    logOut()
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

  const link = <div className='flex flex-col lg:flex-row gap-2'>
  
           <NavLink to=''><li>Donation Requests</li></NavLink>
            <li className=''>Funding Links</li>
            <li className=''></li>
  
  </div>
 
 const recognize = <div className='flex flex-col lg:flex-row gap-3'>
     <Link to='/login'><button className='btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-0 text-[12px] lg:text-[15px] lg:px-8 '>Log In</button></Link>
   </div>


    return (
        <div>
            
            <div className="navbar bg-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
        {
        user ? <button className='btn'>Log Out</button> : recognize
        }
      </ul>
    </div>
   <Link to='/'> <a className="btn btn-ghost"><img className='w-[30px] lg:w-[40px]' src='/public/myLogo.png'></img>
    <p className='font-bold text-[18px] lg:text-[22px]'>Give & Grow</p></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
   
   {
    user ? <button onClick={handleLogOut} className='btn bg-white text-black border-4 border-black hover:bg-black hover:text-white px-6 py-0 text-[12px] lg:text-[15px] lg:px-8 '>Log Out</button> : recognize
   }

  </div>
</div>












        </div>
    );
};

export default NavBar;