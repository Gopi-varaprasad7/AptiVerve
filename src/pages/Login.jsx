import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className='m-4 flex gap-4' onClick={handleClick}>
        <BookOpen className='text-blue-400 w-8 h-8' />
        <h1 className='text-2xl font-bold text-blue-400'>AptiVerve</h1>
      </div>
      <div className='flex justify-center items-center mt-12 lg:mt-36'>
        <div className='shadow-lg  p-16 rounded'>
          <div className='flex items-center justify-center'>
            <BookOpen className='w-12 h-12 text-blue-400 text-center' />
          </div>
          <h2 className='text-2xl font-semibold text-center'>
            Welcome to AptiVerve
          </h2>
          <p className='text-center text-gray-400'>
            Sign in to continue your learning journey
          </p>
          <div className='border bg-gray-400 text-white flex justify-between rounded-lg mt-2'>
            <button
              onClick={() => setRole('user')}
              className={`w-42 h-12 border rounded-l-lg ${
                role === 'user' ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            >
              User
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`w-42 h-12 border rounded-r-lg ${
                role === 'admin' ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            >
              Admin
            </button>
          </div>
          <form className='mt-4'>
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
            <button className='w-84 h-12 border rounded-lg bg-blue-400 text-white text-lg mt-8 mb-2 transform transition-transform duration-300 hover:scale-105'>
              Sign In
            </button>
          </form>
          <p className='text-gray-400 text-justify'>
            Don't have an account?{' '}
            <a href='/register' className='text-blue-400 underline'>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
