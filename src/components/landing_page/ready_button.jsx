import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ready_Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };
  return (
    <div className='flex items-center justify-center flex-wrap mx-8 mt-24 flex-col'>
      <h1 className='text-4xl font-semibold'>Ready to start practicing ?</h1>
      <p className='mt-8 text-lg text-gray-400'>
        Join thousands of learners improving their aptitude skills
      </p>
      <button
        className='w-76 h-12 border rounded-lg bg-blue-400 text-white text-lg mt-8 transform transition-transform duration-300 hover:scale-105'
        onClick={handleClick}
      >
        Create Free Account
      </button>
    </div>
  );
};

export default Ready_Button;
