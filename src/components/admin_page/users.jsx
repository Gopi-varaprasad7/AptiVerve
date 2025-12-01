import React, { useEffect, useState } from 'react';
import { useAdmin } from '../../context/adminContext.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';

const Users = () => {
  const { getAllUsers, deleteUser } = useAdmin();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='m-8 max-h-screen overflow-y-auto'>
      <div className='flex gap-4'>
        <ArrowLeft onClick={() => navigate('/add_question')} />
        <h1 className='text-2xl font-bold text-blue-400'>User Management</h1>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md'>
        <table className='w-full table-auto'>
          <thead>
            <tr>
              <th className='border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600'>
                User ID
              </th>
              <th className='border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600'>
                Name
              </th>
              <th className='border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600'>
                Email
              </th>
              <th className='border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u._id}>
                  <td className='border-b border-gray-200 px-4 py-2'>
                    {u._id}
                  </td>
                  <td className='border-b border-gray-200 px-4 py-2'>
                    {u.name}
                  </td>
                  <td className='border-b border-gray-200 px-4 py-2'>
                    {u.email}
                  </td>
                  <td className='border-b border-gray-200 px-4 py-2 text-red-400 '>
                    <Trash2 size={20} onClick={() => deleteUser(u._id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3' className='text-center py-4 text-gray-500'>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
