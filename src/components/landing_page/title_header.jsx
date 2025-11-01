
import { BookOpen } from 'lucide-react';


const Title_Header = () => {
  return (
    <div className='flex items-center justify-center flex-col mx-8 mt-24'>
      <div className='flex gap-4'>
        <BookOpen className='w-16 h-16 text-blue-300' />
        <h1 className='font-poppins font-bold text-6xl'>AptiVerve</h1>
      </div>
      <p className='text-3xl mt-12 text-gray-400'>
        Master aptitude questions with AI-powered solutions and intelligent
        practice
      </p>
      <div className='mt-12 flex gap-4 flex-wrap'>
        <button
          className='w-84 h-12 border rounded-lg bg-blue-400 text-white text-lg transform transition-transform duration-300 hover:scale-105'
          onClick={() => ''}
        >
          Get Started
        </button>
        <button className='w-84 h-12 border rounded-lg hover:bg-blue-400 hover:text-white text-lg'>
          Browse Questions
        </button>
      </div>
    </div>
  );
};

export default Title_Header;
