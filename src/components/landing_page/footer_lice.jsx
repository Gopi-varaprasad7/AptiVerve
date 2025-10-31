import React from 'react';
import { Copyright } from 'lucide-react';

const Footer_Lice = () => {
  return (
    <div className='flex flex-col items-center justify-center my-8 w-full'>
      {/* Horizontal line */}
      <hr className='w-full border-t border-gray-300 mb-4' />

      {/* Footer content */}
      <div className='flex gap-2 items-center justify-center text-gray-400'>
        <Copyright className='w-4 h-4' />
        <p>2025 AptiVerve | Powered by AI Assistant</p>
      </div>
    </div>
  );
};

export default Footer_Lice;
