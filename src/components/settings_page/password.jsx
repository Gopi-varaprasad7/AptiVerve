import React, { useState } from 'react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage('❌ New passwords do not match.');
      return;
    }

    if (formData.newPassword.length < 6) {
      setMessage('⚠️ Password must be at least 6 characters long.');
      return;
    }

    // TODO: Replace with API call
    console.log('Password changed successfully:', formData);
    setMessage('✅ Password updated successfully!');
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className='flex justify-center mt-4  min-h-screen bg-gray-50'>
      <div className='w-full  bg-white shadow-md rounded-xl p-8 border border-gray-100'>
        <h2 className='text-3xl font-semibold mb-2'>Change Password</h2>
        <p className='text-gray-500 mb-8'>
          Update your password to keep your account secure
        </p>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          {/* Current Password */}
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>
              Current Password
            </label>
            <input
              type='password'
              name='currentPassword'
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder='Enter current password'
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
          </div>

          {/* New Password */}
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>
              New Password
            </label>
            <input
              type='password'
              name='newPassword'
              value={formData.newPassword}
              onChange={handleChange}
              placeholder='Enter new password'
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>
              Confirm New Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm new password'
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
          </div>

          {/* Message */}
          {message && (
            <div
              className={`text-sm font-medium ${
                message.includes('✅')
                  ? 'text-green-600'
                  : message.includes('⚠️')
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}
            >
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            className='w-fit bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200'
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
