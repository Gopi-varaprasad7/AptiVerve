import { useState } from 'react';
import NotificationPreferences from './notification';
import ProfileInformation from './profile';
import ChangePassword from './password';

const ButtonsCard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  return (
    <div className='m-8'>
      <div className='flex justify-between gap-4 p-2 border rounded-lg text-white shadow-md border-gray-400 bg-gray-300'>
        <button
          onClick={() => setActiveTab('profile')}
          className={`text-center w-[50%] h-8 ${
            activeTab === 'profile' ? 'bg-white text-black rounded' : ''
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`text-center w-[50%] h-8 ${
            activeTab === 'security' ? 'bg-white text-black rounded' : ''
          }`}
        >
          Security
        </button>
        <button
          onClick={() => setActiveTab('notification')}
          className={`text-center w-[50%] h-8 ${
            activeTab === 'notification' ? 'bg-white text-black rounded' : ''
          }`}
        >
          Notification
        </button>
      </div>
      <div>
        {activeTab === 'profile' && <ProfileInformation />}
        {activeTab === 'security' && <ChangePassword />}
        {activeTab === 'notification' && <NotificationPreferences />}
      </div>
    </div>
  );
};

export default ButtonsCard;
