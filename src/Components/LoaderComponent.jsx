import React from 'react';

const LoaderComponent = () => {
    return (
        <div className='flex items-center justify-center h-[500px]'>
            <img className='h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] animate-spin' src='/myLogo-Photoroom.png'></img>
        </div>
    );
};

export default LoaderComponent;