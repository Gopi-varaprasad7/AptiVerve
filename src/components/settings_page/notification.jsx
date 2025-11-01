import React, { useState } from 'react';

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    push: false,
    digest: true,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className='bg-white rounded-2xl shadow-md p-8 mt-4 mx-auto'>
      <h2 className='text-2xl font-semibold mb-1'>Notification Preferences</h2>
      <p className='text-gray-500 mb-6'>Manage how you receive notifications</p>

      <div className='divide-y divide-gray-200'>
        {/* Email Notifications */}
        <div className='flex justify-between items-center py-5'>
          <div>
            <h3 className='font-medium text-gray-800'>Email Notifications</h3>
            <p className='text-gray-500 text-sm'>
              Receive email about your account activity
            </p>
          </div>
          <button
            onClick={() => togglePreference('email')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              preferences.email ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                preferences.email ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>

        {/* Push Notifications */}
        <div className='flex justify-between items-center py-5'>
          <div>
            <h3 className='font-medium text-gray-800'>Push Notifications</h3>
            <p className='text-gray-500 text-sm'>
              Receive push notifications on your devices
            </p>
          </div>
          <button
            onClick={() => togglePreference('push')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              preferences.push ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                preferences.push ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>

        {/* Weekly Digest */}
        <div className='flex justify-between items-center py-5'>
          <div>
            <h3 className='font-medium text-gray-800'>Weekly Digest</h3>
            <p className='text-gray-500 text-sm'>
              Get a weekly summary of your progress
            </p>
          </div>
          <button
            onClick={() => togglePreference('digest')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              preferences.digest ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                preferences.digest ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
