import React, { useState } from 'react';
import { BookOpen, LogOut, User } from 'lucide-react';
import Question_Form from './question_form';
import { useNavigate } from 'react-router-dom';
import ManageQuestion from './manage_questions';

const Top_Bar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('add_question');

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
              isActive === 'manage_questions'
                ? 'text-blue-400'
                : 'text-gray-400'
            } hover:text-blue-500 transition`}
          >
            Manage Questions
          </button>

          <User
            size={32}
            onClick={() => navigate('/users')}
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
      <div>{isActive === 'add_question' && <Question_Form />}</div>
      <div>{isActive === 'manage_questions' && <ManageQuestion />}</div>
    </div>
  );
};

export default Top_Bar;
