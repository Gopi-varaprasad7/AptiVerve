import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className='m-4 flex gap-4' onClick={handleClick}>
        <BookOpen className='text-blue-400 w-8 h-8' />
        <h1 className='text-2xl'>AptiVerve</h1>
      </div>
      <div className='flex justify-center items-center mt-16'>
        <div className='shadow-lg  p-16 rounded'>
          <div className='flex items-center justify-center'>
            <BookOpen className='w-12 h-12 text-blue-400 text-center' />
          </div>
          <h2 className='text-2xl font-semibold text-center'>Create Account</h2>
          <p className='text-center text-gray-400'>
            Join AptiVerve and start learning today
          </p>
          <form className='mt-4'>
            <label className=''>Full Name</label>
            <br />
            <input
              type='text'
              placeholder='Gopi Vara'
              className='text-gray-400 border border-gray-400 rounded w-84 h-12 pl-4 mb-2'
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type='email'
              placeholder='name@gmail.com'
              className='text-gray-400 border border-gray-400 rounded w-84 h-12 pl-4 mb-2'
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type='password'
              placeholder='.........'
              className='text-gray-400 border border-gray-400 rounded w-84 h-12 pl-4 mb-2'
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Confirm Password</label>
            <br />
            <input
              type='password'
              placeholder='.........'
              className='text-gray-400 border border-gray-400 rounded w-84 h-12 pl-4 mb-2'
            />
            <br />
            <button className='w-84 h-12 border rounded-lg bg-blue-400 text-white text-lg mt-8 mb-2 transform transition-transform duration-300 hover:scale-105'>
              Create Account
            </button>
          </form>
          <p className='text-gray-400'>
            Already have an account?{' '}
            <a href='/login' className='text-blue-400 underline'>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
