import React from 'react';

const ContactUs = () => {
    return (
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
    <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-white text-black">
      <div className="card-body">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input bg-white" placeholder="Your" />
          <label className="label">Email</label>
          <input type="email" className="input bg-white" placeholder="Email" />
          <label className="label">Subject</label>
          <input type="text" className="input bg-white" placeholder="Subject" />
          <label className="label">Message</label>
          <input type="text" className="input bg-white" placeholder="Message" />
          <button className="btn mt-4 bg-blue-600 hover:bg-blue-700 text-white">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default ContactUs;