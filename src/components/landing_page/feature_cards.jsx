import React from 'react';
import { Brain } from 'lucide-react';
import { ChartColumnStacked } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const Feature_Cards = () => {
  return (
    <div className='flex items-center justify-center flex-wrap m-16'>
      <div className='m-4 flex items-center justify-center flex-col p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-blue-200'>
        <Brain className='text-blue-400' />
        <h2 className='text-lg font-semibold mt-2'>AI-Powered Solutions</h2>
        <p className='text-gray-400 mt-2'>
          Get step-by-step explanations for every question
        </p>
      </div>
      <div className='m-2 flex items-center justify-center flex-col p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-blue-200'>
        <ChartColumnStacked className='text-blue-400' />
        <h2 className='text-lg font-semibold mt-2'>Multiple Categories</h2>
        <p className='text-gray-400 mt-2'>
          Practice across clocks, trains, profit & loss, and more
        </p>
      </div>
      <div className='m-4 flex items-center justify-center flex-col p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-blue-200'>
        <TrendingUp className='text-blue-400 text-4xl' />
        <h2 className='text-lg font-semibold mt-2'>Track Progress</h2>
        <p className='text-gray-400 mt-2'>
          Monitor your improvement over time or day by day
        </p>
      </div>
    </div>
  );
};

export default Feature_Cards;
