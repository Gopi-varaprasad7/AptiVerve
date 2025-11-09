import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  // ✅ Email & Password Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // 🔹 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error('Please fill all fields');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      toast.error(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created successfully!');
        console.log('✅ Registration successful:', data);
        navigate('/login');
      } else {
        toast.error(data.message || 'Registration failed');
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

      <div className='flex justify-center items-center mt-16'>
        <div className='shadow-lg p-16 rounded-2xl w-[400px]'>
          <div className='flex items-center justify-center mb-4'>
            <BookOpen className='w-12 h-12 text-blue-400' />
          </div>
          <h2 className='text-2xl font-semibold text-center'>Create Account</h2>
          <p className='text-center text-gray-400'>
            Join AptiVerve and start learning today
          </p>

          {/* Registration Form */}
          <form className='mt-4' onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type='text'
              name='name'
              placeholder='Gopi Vara'
              value={formData.name}
              onChange={handleChange}
              className='text-gray-700 border border-gray-400 rounded w-full h-12 pl-4 mb-3'
            />

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
              className='text-gray-700 border border-gray-400 rounded w-full h-12 pl-4 mb-3'
            />

            <label>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='********'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='text-gray-700 border border-gray-400 rounded w-full h-12 pl-4 mb-4'
            />

            <button
              type='submit'
              className='w-full h-12 bg-blue-400 text-white text-lg rounded-lg mt-4 hover:scale-105 transition-transform duration-300'
            >
              Create Account
            </button>
          </form>

          <p className='text-gray-400 text-center mt-4'>
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
