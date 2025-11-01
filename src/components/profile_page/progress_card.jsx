import { useState } from 'react';
import CategoryProgress from './category_progress';
import RecentActivity from './recent_activity';

const ProgressCard = () => {
  const [activeTab, setActiveTab] = useState('progress');
  return (
    <div className='m-8'>
      <div className='flex justify-between gap-4 p-2 border rounded-lg text-white shadow-md border-gray-400 bg-gray-300'>
        <button
          onClick={() => setActiveTab('progress')}
          className={`text-center w-[50%] h-8 ${
            activeTab === 'progress' ? 'bg-white text-black rounded' : ''
          }`}
        >
          Progress
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`text-center w-[50%] h-8 ${
            activeTab === 'activity' ? 'bg-white text-black rounded' : ''
          }`}
        >
          Recent Activity
        </button>
      </div>
      <div className='mt-4'>
        {activeTab === 'progress' && <CategoryProgress />}
        {activeTab === 'activity' && <RecentActivity />}
      </div>
    </div>
  );
};

export default ProgressCard;
