import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const ProfileInformation = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState('');

  // Update text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Upload and preview avatar
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', formData);
    setMessage('✅ Profile updated successfully!');
  };

  // Generate initials if no avatar
  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <div className='flex justify-center mt-4 min-h-screen bg-gray-50'>
      <div className='w-full  bg-white shadow-md rounded-xl p-8 border border-gray-100'>
        <h2 className='text-3xl font-semibold mb-2'>Profile Information</h2>
        <p className='text-gray-500 mb-8'>
          Update your personal information and profile picture
        </p>

        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          {/* Avatar Section */}
          <div className='flex items-center gap-6'>
            {avatar ? (
              <img
                src={avatar}
                alt='avatar'
                className='w-20 h-20 rounded-full object-cover border-2 border-blue-500'
              />
            ) : (
              <div className='w-20 h-20 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold'>
                {getInitials(formData.name)}
              </div>
            )}
            <label
              htmlFor='avatar-upload'
              className='flex items-center gap-2 px-5 py-2.5 border rounded-lg cursor-pointer hover:bg-gray-50 text-gray-700 font-medium transition'
            >
              <Upload className='w-5 h-5' />
              Change Avatar
              <input
                type='file'
                id='avatar-upload'
                accept='image/*'
                onChange={handleAvatarChange}
                className='hidden'
              />
            </label>
          </div>

          <hr className='border-gray-200' />

          {/* Full Name */}
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your full name'
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
          </div>

          {/* Email Address */}
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
          </div>

          {/* Message */}
          {message && (
            <div className='text-green-600 text-sm font-medium'>{message}</div>
          )}

          {/* Save Button */}
          <button
            type='submit'
            className='w-fit bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200'
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileInformation;
