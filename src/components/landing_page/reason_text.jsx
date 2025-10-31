import React from 'react';
import { Sparkle } from 'lucide-react';
import { Check } from 'lucide-react';

const Reason_Text = () => {
  return (
    <div className='flex items-center justify-center flex-wrap my-8 mt-48 flex-col'>
      <div className='flex gap-4 '>
        <Sparkle className='w-16 h-12 text-blue-400'/>
        <h1 className='text-4xl font-semibold'>Why Choose AptiVerve ?</h1>
      </div>
      <p className='text-gray-400 text-lg mt-8 text-justify px-2'>
        We combine traditional aptitude practice with modern AI technology to
        help you learn faster and smarter
      </p>
      <div className='grid gap-12 grid-cols-2 mt-8 p-2'>
        <div className='flex gap-4'>
          <Check className='text-blue-400' />
          <div>
            <h2>Comprehensive Question Bank</h2>
            <p className='text-gray-400'>
              Hundreds of questions across all major aptitude topics
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Check className='text-blue-400' />
          <div>
            <h2>Difficulty Levels</h2>
            <p className='text-gray-400'>
              Filter by easy, medium, or hard to match your skill level
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Check className='text-blue-400' />
          <div>
            <h2>Instant AI Help</h2>
            <p className='text-gray-400'>
              Stuck? Get AI-powered explanations on demand
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Check className='text-blue-400' />
          <div>
            <h2>Clean, Modern Interface</h2>
            <p className='text-gray-400'>
              Distraction-free learning experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason_Text;
