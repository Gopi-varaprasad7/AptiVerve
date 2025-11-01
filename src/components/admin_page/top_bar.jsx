import React, { useState } from 'react';
import { BookOpen, LogOut, User } from 'lucide-react';

const Top_Bar = () => {
  const [isActive, setIsActive] = useState('add_question');

  return (
    <div className='flex justify-between m-8 shadow-lg p-4 rounded-lg bg-white'>
      {/* Logo Section */}
      <div className='flex gap-2 items-center'>
        <BookOpen className='w-8 h-8 text-blue-400' />
        <h1 className='font-poppins font-bold text-2xl ml-2 text-blue-500'>
          AptiVerve
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className='flex gap-4 items-center text-lg'>
        <button
          onClick={() => setIsActive('add_question')}
          className={`px-4 py-2 rounded-md ${
            isActive === 'add_question' ? 'text-blue-400' : 'text-gray-400'
          } hover:text-blue-500  transition`}
        >
          Add Question
        </button>

        <button
          onClick={() => setIsActive('manage_questions')}
          className={`px-4 py-2 rounded-md ${
            isActive === 'manage_questions' ? 'text-blue-400' : 'text-gray-400'
          } hover:text-blue-500 transition`}
        >
          Manage Questions
        </button>

        <User
          size={32}
          onClick={() => setIsActive('user')}
          className={`p-2 rounded-md cursor-pointer ${
            isActive === 'user' ? 'text-blue-400' : 'text-gray-400'
          } hover:text-blue-500  transition`}
        />

        <LogOut
          size={32}
          onClick={() => setIsActive('logout')}
          className={`p-2 rounded-md cursor-pointer ${
            isActive === 'logout' ? 'text-blue-400' : 'text-gray-400'
          } hover:text-blue-500 transition`}
        />
      </div>
    </div>
  );
};

export default Top_Bar;
