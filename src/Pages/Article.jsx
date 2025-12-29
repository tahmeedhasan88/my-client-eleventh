import React from 'react';

const Article = () => {
    return (
        <div>
            
        <div className=" px-4 py-10 sm:px-6 lg:px-20">
  <div className="max-w-5xl mx-auto">

    {/* Article Header */}
    <div className="mb-8 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
        How Give & Grow Is Transforming Blood Donation
      </h1>
      <p className="text-sm sm:text-base text-yellow-200">
        Published by Give & Grow Blood Donation Foundation
      </p>
    </div>

    <article className="bg-white rounded-2xl shadow-md p-5 sm:p-8 lg:p-10 space-y-6 text-gray-800">

      <p className="text-base sm:text-lg leading-relaxed">
        Blood donation is one of the simplest yet most powerful ways to save lives.
        <span className="font-semibold text-[#1F2B43]">
          {" "}Give & Grow Blood Donation Foundation
        </span>{" "}
        was founded with the belief that no patient should suffer due to the
        unavailability of blood during emergencies.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-red-600">
        The Challenge
      </h2>

      <p className="text-base sm:text-lg leading-relaxed">
        In many hospitals, patients struggle to find compatible blood donors on
        time. Delays, lack of information, and limited donor networks often put
        lives at risk. Give & Grow identified this gap and took action to build
        a fast, reliable, and community-driven solution.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-green-700">
        The Solution
      </h2>

      <p className="text-base sm:text-lg leading-relaxed">
        Through a digital platform and a dedicated volunteer network, Give & Grow
        connects donors and patients within minutes. Emergency requests are shared,
        verified donors respond quickly, and lives are saved through timely action.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <p className="text-sm sm:text-base font-medium">
          Since its launch, the foundation has successfully supported hundreds of
          patients by ensuring quick access to safe blood donations.
        </p>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-purple-700">
        Looking Forward
      </h2>

      <p className="text-base sm:text-lg leading-relaxed">
        Give & Grow aims to expand its services nationwide, raise awareness about
        voluntary blood donation, and encourage more people to become regular donors.
        Every contribution—big or small—brings us closer to a healthier and more
        compassionate society.
      </p>

      <p className="text-center text-base sm:text-lg font-semibold text-[#1F2B43] mt-6">
        “Together, we can give blood and grow hope.”
      </p>

    </article>
  </div>
</div>



        </div>
    );
};

export default Article;