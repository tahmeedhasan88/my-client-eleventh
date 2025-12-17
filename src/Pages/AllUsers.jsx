import React from 'react';

const AllUsers = () => {
    return (
        <div>
           

{/* Donation Requests */}
        <div className='mt-10'>
<h2 className='text-2xl lg:text-3xl text-white font-semibold mb-4'>Donor Requests</h2>
<div className="w-full overflow-x-auto border border-gray-700 bg-gray-900 text-white rounded-lg">
{/* Set max height with vertical scroll for more than 10 rows */}
<div className="max-h-96 overflow-y-auto">
<table className="table w-full">
<thead className="bg-gray-800 text-gray-200 sticky top-0">
<tr>
<th className="px-3 py-2">User</th>
<th className="px-3 py-2 hidden md:table-cell">Email</th>
<th className="px-3 py-2 hidden lg:table-cell">Role</th>
<th className="px-3 py-2">Status</th>
<th className="px-3 py-2">Option</th>
</tr>
</thead>
<tbody>
{/* Row Template */}
<tr className="hover:bg-gray-700 transition-colors">
<td className="px-3 py-2">
<div className="flex items-center gap-3">
<div className="avatar">
<div className="w-10 h-10 rounded-full bg-gray-600" />
</div>
<div>
<p className="font-semibold">User Name</p>
<p className="text-xs text-gray-400 md:hidden">
user@email.com
</p>
</div>
</div>
</td>


<td className="px-3 py-2 hidden md:table-cell text-gray-300">user@email.com</td>


<td className="px-3 py-2 hidden lg:table-cell">
<span className="badge badge-outline text-gray-200 border-gray-500">Role</span>
</td>


<td className="px-3 py-2">
<span className="badge badge-success">Active</span>
</td>


<td className="px-3 py-2">
<p className="cursor-pointer hover:text-gray-400">Menu</p>
</td>
</tr>
{/* Repeat rows as needed */}
</tbody>
</table>
</div>
</div>
        </div>






{/* All user */}

        <div className='mt-10'>
        <h2 className='text-2xl lg:text-3xl text-white font-semibold mb-4'>All Users</h2>
        <div className="w-full overflow-x-auto border border-gray-700 bg-gray-900 text-white rounded-lg">
        {/* Set max height with vertical scroll for more than 10 rows */}
        <div className="max-h-96 overflow-y-auto">
        <table className="table w-full">
        <thead className="bg-gray-800 text-gray-200 sticky top-0">
        <tr>
        <th className="px-3 py-2">User</th>
        <th className="px-3 py-2 hidden md:table-cell">Email</th>
        <th className="px-3 py-2 hidden lg:table-cell">Role</th>
        <th className="px-3 py-2">Status</th>
        <th className="px-3 py-2">Option</th>
        </tr>
        </thead>
        <tbody>
        {/* Row Template */}
        <tr className="hover:bg-gray-700 transition-colors">
        <td className="px-3 py-2">
        <div className="flex items-center gap-3">
        <div className="avatar">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        </div>
        <div>
        <p className="font-semibold">User Name</p>
        <p className="text-xs text-gray-400 md:hidden">
        user@email.com
        </p>
        </div>
        </div>
        </td>


        <td className="px-3 py-2 hidden md:table-cell text-gray-300">user@email.com</td>


        <td className="px-3 py-2 hidden lg:table-cell">
        <span className="badge badge-outline text-gray-200 border-gray-500">Role</span>
        </td>


        <td className="px-3 py-2">
        <span className="badge badge-success">Active</span>
        </td>


        <td className="px-3 py-2">
        <p className="cursor-pointer hover:text-gray-400">Menu</p>
        </td>
        </tr>
        {/* Repeat rows as needed */}
        </tbody>
        </table>
        </div>
        </div>
        </div>




        </div>
    );
};

export default AllUsers;