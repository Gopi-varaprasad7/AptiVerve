import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user',
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  // 🔹 Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill all fields!');
      return;
    }

    try {
      const apiUrl =
        formData.role === 'admin'
          ? 'http://localhost:3001/api/admin/login'
          : 'http://localhost:3001/api/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`${formData.role} login successful!`);
        formData.email = '';
        formData.password = '';

        // Save token if you want
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', formData.role);
        localStorage.setItem('userId', data.userId);

        if (formData.role === 'admin') {
          navigate('/add_question');
        } else {
          navigate('/home');
        }
      } else {
        toast.error(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <div className='m-4 flex gap-4 cursor-pointer' onClick={handleClick}>
        <BookOpen className='text-blue-400 w-8 h-8' />
        <h1 className='text-2xl font-bold text-blue-400'>AptiVerve</h1>
      </div>

      <div className='flex justify-center items-center mt-36'>
        <div className='shadow-lg p-16 rounded-2xl w-[400px]'>
          <div className='flex items-center justify-center mb-4'>
            <BookOpen className='w-12 h-12 text-blue-400' />
          </div>
          <h2 className='text-2xl font-semibold text-center'>
            Welcome to AptiVerve
          </h2>
          <p className='text-center text-gray-400 mb-4'>
            Sign in to continue your learning journey
          </p>

          {/* Role toggle */}
          <div className='border bg-gray-400 text-white flex justify-between rounded-lg mt-2'>
            <button
              type='button'
              onClick={() => setFormData({ ...formData, role: 'user' })}
              className={`w-1/2 h-12 rounded-l-lg ${
                formData.role === 'user' ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            >
              User
            </button>
            <button
              type='button'
              onClick={() => setFormData({ ...formData, role: 'admin' })}
              className={`w-1/2 h-12 rounded-r-lg ${
                formData.role === 'admin' ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            >
              Admin
            </button>
          </div>

          {/* Login form */}
          <form className='mt-4' onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='name@gmail.com'
              value={formData.email}
              onChange={handleChange}
              className='text-gray-700 border border-gray-400 rounded w-full h-12 pl-4 mb-3'
            />

            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='********'
              value={formData.password}
              onChange={handleChange}
              className='text-gray-700 border border-gray-400 rounded w-full h-12 pl-4 mb-4'
            />

            <button
              type='submit'
              className='w-full h-12 bg-blue-400 text-white text-lg rounded-lg mt-4 hover:scale-105 transition-transform duration-300'
            >
              Sign In
            </button>
          </form>

          <p className='text-gray-400 text-center mt-4'>
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
