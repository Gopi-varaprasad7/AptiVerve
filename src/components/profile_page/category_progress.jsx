import React from 'react';

const CategoryProgress = () => {
  const categories = [
    { name: 'Clocks', completed: 45, total: 60 },
    { name: 'Trains', completed: 32, total: 50 },
    { name: 'Boats', completed: 28, total: 45 },
    { name: 'Work', completed: 50, total: 70 },
    { name: 'Profit & Loss', completed: 40, total: 55 },
  ];

  return (
    <div className='bg-white shadow-md rounded-xl p-6 w-full'>
      <h2 className='text-xl font-semibold mb-1'>Category Progress</h2>
      <p className='text-gray-500 mb-6'>
        Your performance across different question categories
      </p>

      <div className='space-y-6'>
        {categories.map((cat, index) => {
          const percentage = (cat.completed / cat.total) * 100;
          return (
            <div key={index}>
              <div className='flex justify-between text-gray-800 mb-2 text-sm font-medium'>
                <span>{cat.name}</span>
                <span>
                  {cat.completed}/{cat.total} questions
                </span>
              </div>

              <div className='w-full bg-blue-100 h-2 rounded-full'>
                <div
                  className='h-2 bg-blue-500 rounded-full transition-all duration-500'
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProgress;
