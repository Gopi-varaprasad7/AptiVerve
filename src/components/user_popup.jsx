import { CircleUser, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserPopup = () => {
  const navigate = useNavigate();
  return (
    <div className='absolute top-24 right-8 w-48 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4'>
      <div>
        <p className='text-sm'>John Doe</p>
        <p className='text-sm'>name@gmail.com</p>
      </div>
      <hr />
      <section
        className='flex gap-2 items-center cursor-pointer p-1 rounded-md hover:bg-blue-400'
        onClick={() => navigate('/profile')}
      >
        <CircleUser size={16} />
        <p className='text-sm'>Profile</p>
      </section>
      <section
        className='flex gap-2 items-center cursor-pointer hover:bg-blue-400 p-1 rounded-md'
        onClick={() => navigate('/settings')}
      >
        <Settings size={16} />
        <p className='text-sm'>Settings</p>
      </section>
    </div>
  );
};

export default UserPopup;
