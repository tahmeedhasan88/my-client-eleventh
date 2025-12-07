import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div>

         {/* Banner Section   */}
       <section
      className="
        relative w-full 
        h-[350px] sm:h-[420px] md:h-[500px] lg:h-[560px]
        bg-cover bg-center flex items-center
      "
      style={{
        backgroundImage: `url('/banner.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        className="
          relative z-10 w-full
          max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
          flex flex-col justify-center
        "
      >
        <h1 className="
            text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl type">
          Connecting Hearts,<br /> Cultivate Hope
        </h1>

        <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/joinAsADonor"
            className="
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              px-5 py-2.5 sm:px-6 sm:py-3
              rounded-md transition
            "
          >
            Join as a Donor
          </Link>

          <Link
            to=""
            className="
              bg-blue-500 hover:bg-blue-600
              text-white font-semibold
              px-5 py-2.5 sm:px-6 sm:py-3
              rounded-md transition
            "
          >
            Search Campaigns
          </Link>
        </div>
      </div>
        </section>

      {/* Featured Section */}

      <div className='mt-7'>
      <h3 className='text-[18px] lg:text-[22px] text-white font-bold mb-5 ml-[30px]'>Featured Stories</h3>

      {/* card Section */}
    <div className='grid lg:grid-cols-3 gap-10 lg:gap-0 mb-10'>

        <div
    className="
    relative rounded-xl overflow-hidden
    shadow-lg bg-white
    w-full max-w-xs mx-auto
    "
>
    {/* Image */}
    <img
    src='/bloodBank.JPG'
    alt='Blood Bank Information'
    className="w-full h-48 sm:h-56 md:h-64 object-cover"
    />

    {/* Overlay */}
    <div
    className="
        absolute bottom-0 left-0 w-full
        bg-black/40 text-white
        py-4 flex flex-col items-center
    "
    >
    <h3 className="text-lg sm:text-xl font-semibold">Blood Bank Details</h3>

    <Link
        to=''
        className="
        mt-2 bg-emerald-500 hover:bg-emerald-600
        text-white px-4 py-1.5
        rounded-md text-sm sm:text-base
        transition
        "
    >
        Learn More
    </Link>
    </div>
        </div>


        <div
    className="
    relative rounded-xl overflow-hidden
    shadow-lg bg-white
    w-full max-w-xs mx-auto
    "
>
    {/* Image */}
    <img
    src='/donnersGp.jpg'
    alt='Success Stories'
    className="w-full h-48 sm:h-56 md:h-64 object-cover"
    />

    {/* Overlay */}
    <div
    className="
        absolute bottom-0 left-0 w-full
        bg-black/40 text-white
        py-4 flex flex-col items-center
    "
    >
    <h3 className="text-lg sm:text-xl font-semibold">Success Stories</h3>

    <Link
        to=''
        className="
        mt-2 bg-emerald-500 hover:bg-emerald-600
        text-white px-4 py-1.5
        rounded-md text-sm sm:text-base
        transition
        "
    >
        Learn More
    </Link>
    </div>
        </div>


        <div
    className="
    relative rounded-xl overflow-hidden
    shadow-lg bg-white
    w-full max-w-xs mx-auto
    "
>
    {/* Image */}
    <img
    src='/Articles.JPG'
    alt='Articles'
    className="w-full h-48 sm:h-56 md:h-64 object-cover"
    />

    {/* Overlay */}
    <div
    className="
        absolute bottom-0 left-0 w-full
        bg-black/40 text-white
        py-4 flex flex-col items-center
    "
    >
    <h3 className="text-lg sm:text-xl font-semibold">Articles</h3>

    <Link
        to=''
        className="
        mt-2 bg-emerald-500 hover:bg-emerald-600
        text-white px-4 py-1.5
        rounded-md text-sm sm:text-base
        transition
        "
    >
        Learn More
    </Link>
    </div>
        </div>


      </div>




      </div>

      {/* Contact Section */}

      <div>
        <h3 className='text-[18px] lg:text-[22px] text-white font-bold mb-5 ml-[30px]'>Contact Us</h3>

       <div>

      {/* Hero Section */}

        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left text-white">
      <h1 className="text-3xl lg:text-5xl font-bold">Have Questions? Call Us!</h1>
      <p className="py-6 font-semibold">
        +1 (800) 555-0199
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Subject</label>
          <input type="text" className="input" placeholder="Subject" />
          <label className="label">Message</label>
          <input type="text" className="input" placeholder="Message" />
          <button className="btn mt-4 bg-blue-600 hover:bg-blue-700 text-white">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
        </div>


       </div>

 
      </div>



        </div>
    );
};

export default HomePage;