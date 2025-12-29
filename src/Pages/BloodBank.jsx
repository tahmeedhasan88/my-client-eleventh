import React from 'react';

const BloodBank = () => {
    return (
        <div>

        <div className="p-5">
  <h2 className="text-2xl font-bold text-white mb-4">
    Blood Bank List
  </h2>

  
  <div className="overflow-x-auto">
    <table className="min-w-[800px] w-full border border-gray-300">
      <thead className="bg-gray-200 text-black">
        <tr>
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Location</th>
          <th className="p-3 border">District</th>
          <th className="p-3 border">Phone</th>
          <th className="p-3 border">Available Blood</th>
          <th className="p-3 border">Service Time</th>
        </tr>
      </thead>

      <tbody className="bg-gray-800 text-white">
        <tr>
          <td className="p-3 border">Sandhani Blood Bank</td>
          <td className="p-3 border">Dhaka Medical College</td>
          <td className="p-3 border">Dhaka</td>
          <td className="p-3 border">02-55165088</td>
          <td className="p-3 border">All Groups</td>
          <td className="p-3 border">24 Hours</td>
        </tr>

        <tr>
          <td className="p-3 border">Quantum Blood Bank</td>
          <td className="p-3 border">Shantinagar</td>
          <td className="p-3 border">Dhaka</td>
          <td className="p-3 border">01714010869</td>
          <td className="p-3 border">A+, B+, O+</td>
          <td className="p-3 border">9 AM – 9 PM</td>
        </tr>

        <tr>
          <td className="p-3 border">Red Crescent Blood Center</td>
          <td className="p-3 border">Mohakhali</td>
          <td className="p-3 border">Dhaka</td>
          <td className="p-3 border">02-9880404</td>
          <td className="p-3 border">All Groups</td>
          <td className="p-3 border">24 Hours</td>
        </tr>

        <tr>
          <td className="p-3 border">Chattogram Blood Bank</td>
          <td className="p-3 border">Agrabad</td>
          <td className="p-3 border">Chattogram</td>
          <td className="p-3 border">031-611407</td>
          <td className="p-3 border">O+, AB+</td>
          <td className="p-3 border">10 AM – 8 PM</td>
        </tr>

        <tr>
          <td className="p-3 border">Rajshahi Medical Blood Bank</td>
          <td className="p-3 border">Rajshahi Medical College</td>
          <td className="p-3 border">Rajshahi</td>
          <td className="p-3 border">0721-772150</td>
          <td className="p-3 border">All Groups</td>
          <td className="p-3 border">24 Hours</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>




        </div>
    );
};

export default BloodBank;