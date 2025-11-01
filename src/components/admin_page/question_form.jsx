import React from 'react';
import { Plus } from 'lucide-react';


const Question_Form = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Add New Question</h1>
        <p className='text-gray-400 text-lg'>
          Create aptitude questions for students to practice
        </p>
      </div>
      <div className='mt-8 p-6 bg-white rounded-lg shadow-md'>
        <section className='flex items-center gap-2 mt-8 mb-4 bg-blue-100 p-2'>
          <Plus size={20} className='text-blue-400' />
          <p className='text-xl font-semibold'>Question Details</p>
        </section>
        <section>
          <label>Category*</label>
          <select className='w-full border border-gray-300 text-gray-400 rounded-md p-2 mt-2 mb-4'>
            <option>Select Category</option>
            <option>Clocks</option>
            <option>Trains</option>
            <option>Work</option>
            <option>Profit & Loss</option>
            <option>Percentage</option>
            <option>Ratio</option>
          </select>
          <label>Question*</label>
          <textarea
            className='w-full border border-gray-300 rounded-md p-2 mt-2 mb-4'
            rows={4}
            placeholder='Enter the question here'
          ></textarea>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 mb-4'>
              <input
                type='text'
                className='w-full border border-gray-300 rounded-md p-2'
                placeholder='Option A'
              />
              <input
                type='text'
                className='w-full border border-gray-300 rounded-md p-2'
                placeholder='Option B'
              />
              <input
                type='text'
                className='w-full border border-gray-300 rounded-md p-2'
                placeholder='Option C'
              />
              <input
                type='text'
                className='w-full border border-gray-300 rounded-md p-2'
                placeholder='Option D'
              />
            </div>
          </div>
          <label>Correct Answer*</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded-md p-2 mt-2 mb-4'
            placeholder='Enter the correct answer here'
          />
          <div className='flex gap-4'>
            <button className='w-32 h-10 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition'>
              Save
            </button>
            <button className='w-32 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition'>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Question_Form;
