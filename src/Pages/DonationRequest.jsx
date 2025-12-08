import React from 'react';

const DonationRequest = () => {
    return (
        <div>

        <div className="max-w-6xl mx-auto p-6 text-white rounded-xl shadow-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Create Donation Request</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="form-control">
            <label className="label mr-4">Requester Name</label>
            <input type="text" placeholder="" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Requester Email</label>
            <input type="email" placeholder="" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Recipient Name</label>
            <input type="text" placeholder="Recipient Name" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Recipient District</label>
            <input type="text" placeholder="" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Recipient Upazila</label>
            <input type="text" placeholder="G" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Hospital Name</label>
            <input type="text" placeholder="Hospital Name" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Full Address Line</label>
            <input type="text" placeholder="Full Address" className="input input-bordered text-black" />
          </div>

          <div className="form-control">
            <label className="label mr-4">Request Message</label>
            <input type="text" placeholder="Write your message..." className="input input-bordered text-black" />
          </div>
        </div>

        <div className="space-y-4">

          <div className="form-control">
            <label className="label mr-4">Blood Group</label>
            <select className='input w-sm text-black'>
            <option value="">Select One</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="4">B+</option>
            <option value="5">B-</option>
            <option value="6">AB+</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
            </select>
          </div>

          

          <div className="form-control">
            <label className="label mr-4">Donation Date</label>
            <input type="date" className="input input-bordered text-black" />
          </div>

          <div className="">
            <div className="form-control">
              <label className="label mr-4">Time</label>
              <input type="time" className="input input-bordered text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">Submit Request</button>
      </div>
    </div>


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
    );
};

export default DonationRequest;