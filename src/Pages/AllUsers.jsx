import { useQuery, useQueryClient } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import { BsThreeDotsVertical } from "react-icons/bs";


const AllUsers = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxios();
  const queryClient = useQueryClient();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
      
    }
   
  });

  const changeRole = async (id, role) => {
  const updatedUser = await axiosSecure.patch(`/users/${role}/${id}`);
  queryClient.setQueryData(['users'], old =>
    old.map(u => (u._id === id ? updatedUser.data : u))
      
  );
  console.log('Updated User:', updatedUser.data)
  refetch(); 
};


  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5 text-white">All Users</h2>

      <div className="overflow-x-auto bg-[#1F2B43] ">
        <table className="table w-full">
          <thead className="text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>

          <tbody className="bg-gray-800 text-white">
            {users.map(u => (
              <tr key={u._id}>



                <td>{u.displayName}</td>

                <td>{u.email}</td>

                {/* Present Role */}
                <td className="capitalize font-medium">
                  {u.role}
                </td>

                {/* Dropdown Action */}
                <td className="text-right">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-sm">
                      <BsThreeDotsVertical size={18} />
                    </label>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 text-black"
                    >
                      {u.role !== 'admin' && (
                        <li>
                          <button onClick={() => changeRole(u._id, 'admin')}>
                            Make Admin
                          </button>
                        </li>
                      )}

                      {u.role !== 'donor' && (
                        <li>
                          <button onClick={() => changeRole(u._id, 'donor')}>
                            Make Donor
                          </button>
                        </li>
                      )}

                      {u.role !== 'volunteer' && (
                        <li>
                          <button onClick={() => changeRole(u._id, 'volunteer')}>
                            Make Volunteer
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
