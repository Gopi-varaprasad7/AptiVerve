import React, { useState } from 'react';
import { BookOpen, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserPopup from '../user_popup';

const Topbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('');
  const [userPopup, setUserPopup] = useState(false);

  return (
    <div className='m-8'>
      <div className='flex justify-between  shadow-lg p-4 rounded-lg bg-white mb-12'>
        {/* Logo Section */}
        <div className='flex gap-2 items-center' onClick={() => navigate('/')}>
          <BookOpen className='w-8 h-8 text-blue-400' />
          <h1 className='font-poppins font-bold text-2xl ml-2 text-blue-500'>
            AptiVerve
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className='flex gap-4 items-center text-lg'>
          <button
            onClick={() => navigate('/')}
            className={`px-4 py-2 rounded-md text-gray-400
              
             hover:text-blue-500  transition`}
          >
            Home
          </button>
          <button
            onClick={() => setIsActive('manage_questions')}
            className={`px-4 py-2 rounded-md ${
              isActive === 'Practice' ? 'text-blue-400' : 'text-gray-400'
            } hover:text-blue-500 transition`}
          >
            Practice
          </button>

          <User
            size={32}
            onClick={() => setUserPopup(!userPopup)}
            className={`p-2 rounded-md cursor-pointer ${
              userPopup ? 'text-blue-400' : 'text-gray-400'
            } hover:text-blue-500  transition`}
          />
          {userPopup && <UserPopup />}
          <LogOut
            size={32}
            onClick={() => setIsActive('logout')}
            className={`p-2 rounded-md cursor-pointer ${
              isActive === 'logout' ? 'text-red-400' : 'text-gray-400'
            } hover:text-red-500 transition`}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
