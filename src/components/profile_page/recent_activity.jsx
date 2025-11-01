import React from 'react';

const RecentActivity = () => {
  const activities = [
    {
      question: 'If a clock shows 3:15, what is the angle…',
      time: '2 hours ago',
      status: 'Correct',
    },
    {
      question: 'A train travels at 60 km/h and another…',
      time: '5 hours ago',
      status: 'Wrong',
    },
    {
      question: 'A boat can travel 20 km downstream…',
      time: '1 day ago',
      status: 'Correct',
    },
    {
      question: 'A and B can complete a work in 12 days…',
      time: '1 day ago',
      status: 'Correct',
    },
  ];

  return (
    <div className='bg-white shadow-md rounded-xl p-6 w-full'>
      <h2 className='text-xl font-semibold mb-1'>Recent Activity</h2>
      <p className='text-gray-500 mb-6'>Your latest question attempts</p>

      <div className='divide-y divide-gray-200'>
        {activities.map((item, index) => (
          <div
            key={index}
            className='flex justify-between items-center py-4 transition hover:bg-gray-50 rounded-lg px-2'
          >
            <div>
              <h3 className='text-gray-800 font-medium text-[15px] mb-1'>
                {item.question}
              </h3>
              <p className='text-gray-400 text-sm'>{item.time}</p>
            </div>

            <span
              className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
                item.status === 'Correct'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
