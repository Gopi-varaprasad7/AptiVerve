import React from 'react';
import {
  SquarePen,
  BookOpenText,
  Mail,
  CalendarFold,
  CircleStar,
  Trophy,
  History,
} from 'lucide-react';

const Details = () => {
  return (
    <div className='m-8 flex flex-col gap-8'>
      <div className='border flex p-4 items-center border-gray-300 rounded-lg '>
        <div className='w-16 h-16 rounded-full border bg-blue-400 text-white text-center pt-4'>
          GP
        </div>
        <div className='ml-4'>
          <section className='flex gap-4'>
            <h2>Gopivaraprasad Koduri</h2>
            <p className='bg-blue-200 rounded-xl px-2'>user</p>
          </section>
          <section className='flex gap-4 text-sm text-gray-500'>
            <div className='flex gap-2 items-center'>
              <Mail size={16} />
              <p>john@example.com</p>
            </div>
            <div className='flex gap-2 items-center'>
              <CalendarFold size={16} />
              <p>Joined January 2023</p>
            </div>
          </section>
        </div>
        <div className='px-4 py-2 bg-blue-400 text-white rounded-md flex gap-2 items-center md:ml-[750px]'>
          <SquarePen size={20} />
          <button>Edit Profile</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='flex gap-8 border p-4 rounded-lg bg-white shadow-md border-gray-400 justify-between'>
          <section>
            <h2 className=' text-lg text-gray-400 mb-4'>Questions Solved</h2>
            <p className='text-center text-xl'>243</p>
          </section>
          <section className='flex gap-2 items-center'>
            <BookOpenText size={32} className='text-blue-400' />
          </section>
        </div>
        <div className='flex gap-8 border p-4 rounded-lg bg-white shadow-md border-gray-400 justify-between'>
          <section>
            <h2 className=' text-lg text-gray-400 mb-4'>Total Attempts</h2>
            <p className='text-center text-xl'>312</p>
          </section>
          <section className='flex gap-2 items-center'>
            <CircleStar size={32} className='text-green-400' />
          </section>
        </div>
        <div className='flex gap-8 border p-4 rounded-lg bg-white shadow-md border-gray-400 justify-between'>
          <section>
            <h2 className=' text-lg text-gray-400 mb-4'>Accuracy Rate</h2>
            <p className='text-center text-xl'>70%</p>
          </section>
          <section className='flex gap-2 items-center'>
            <Trophy size={32} className='text-amber-400' />
          </section>
        </div>
        <div className='flex gap-8 border p-4 rounded-lg bg-white shadow-md border-gray-400 justify-between'>
          <section>
            <h2 className=' text-lg text-gray-400 mb-4'>Study Hours</h2>
            <p className='text-center text-xl'>24h</p>
          </section>
          <section className='flex gap-2 items-center'>
            <History size={32} className='text-violet-400' />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
