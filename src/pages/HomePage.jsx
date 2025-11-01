import React from 'react';
import Home_Bar from '../components/home_page/top_bar';
import FilterBox from '../components/home_page/filter_box';
import QuestionBox from '../components/home_page/question_box';

const HomePage = () => {
  return (
    <div>
      <Home_Bar />
      <div className='m-8'>
        <h1 className='text-2xl font-poppins font-semibold'>
          Practice Questions
        </h1>
        <p className='text-gray-400 text-lg'>
          Choose a category and start practicing
        </p>
      </div>
      <div className='m-8 flex gap-8'>
        <FilterBox />
        <QuestionBox />
      </div>
    </div>
  );
};

export default HomePage;
