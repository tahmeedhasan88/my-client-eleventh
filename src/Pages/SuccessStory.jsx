import React from 'react';

const SuccessStory = () => {
    return (
        <div>
            
        <div className="bg-[#1F2B43] text-white px-4 py-10 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto">

   
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
      Our Success Story
    </h2>

    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10 space-y-6">

      <p className="text-base sm:text-lg leading-relaxed">
        In 2024, <span className="font-semibold text-[#1F2B43]">
        Give & Grow Blood Donation Foundation
        </span> started its journey with one clear mission —
        <span className="font-medium"> no life should be lost due to lack of blood.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-600">
            A Life-Saving Moment
          </h3>
          <p className="text-sm sm:text-base">
            A critical patient urgently needed O+ blood.
            Through our platform, donors responded within
            <span className="font-semibold"> 20 minutes</span>,
            and a life was saved.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-green-700">
            Growing Impact
          </h3>
          <ul className="text-sm sm:text-base list-disc ml-5 space-y-1">
            <li>300+ successful blood donations</li>
            <li>1000+ registered donors</li>
            <li>Hospital & blood bank partnerships</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-base sm:text-lg font-medium text-[#1F2B43]">
        “Give blood. Grow hope. Save lives.”
      </p>

    </div>
  </div>
</div>



        </div>
    );
};

export default SuccessStory;