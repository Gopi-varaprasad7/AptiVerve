import React, { useState } from 'react';

const FilterBox = () => {
  const [isActive, setIsActive] = useState('All');
  return (
    <div className='border border-gray-300 rounded-lg p-4 w-72 max-h-[500px]'>
      <h1 className='text-xl font-semibold'>Filters</h1>
      <div>
        <label className='text-lg'>Category</label>
        <select className='w-full border border-gray-300 text-gray-400 rounded-md p-2 mt-2 mb-4'>
          <option>Select Category</option>
          <option>Clocks</option>
          <option>Trains</option>
          <option>Work</option>
          <option>Profit & Loss</option>
          <option>Percentage</option>
          <option>Ratio</option>
        </select>
      </div>
      <div className='mt-4 flex flex-col '>
        <label className='text-lg'>Difficulty</label>
        <br />
        <button
          className={`rounded-lg px-4 py-2 w-full border border-gray-300 hover:bg-blue-400 ${
            isActive === 'All' ? 'bg-blue-400' : ''
          }`}
          onClick={() => setIsActive('All')}
        >
          All
        </button>
        <br />
        <button
          className={`rounded-lg px-4 py-2 w-full border border-gray-300 hover:bg-blue-400 ${
            isActive === 'Easy' ? 'bg-blue-400' : ''
          }`}
          onClick={() => setIsActive('Easy')}
        >
          Easy
        </button>
        <br />
        <button
          className={`rounded-lg px-4 py-2 w-full border border-gray-300 hover:bg-blue-400 ${
            isActive === 'Medium' ? 'bg-blue-400' : ''
          }`}
          onClick={() => setIsActive('Medium')}
        >
          Medium
        </button>
        <br />
        <button
          className={`rounded-lg px-4 py-2 w-full border border-gray-300 hover:bg-blue-400 ${
            isActive === 'Hard' ? 'bg-blue-400' : ''
          }`}
          onClick={() => setIsActive('Hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
