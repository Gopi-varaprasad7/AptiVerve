import React from 'react';
import { Trash2, SquarePen } from 'lucide-react';

const ManageQuestion = () => {
  const list = ['ID', 'Question', 'Category', 'Correct Answer', 'Actions'];
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Manage Questions</h1>
        <p className='text-gray-400 text-lg'>
          View, edit, and delete existing questions
        </p>
      </div>
      <div className='mt-8 p-6 bg-white rounded-lg shadow-md'>
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
          <div className='w-full'>
            <table className=' border border-gray-300 w-full'>
              <thead>
                <tr className='bg-blue-100'>
                  {list.map((item, index) => (
                    <th
                      key={index}
                      className='px-4 py-2 border-b border-gray-300 text-left'
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-2'>1</td>
                  <td className='px-4 py-2 break-after-auto whitespace-normal'>
                    Sample question text goes here awdklk;;las; askdkld;ldjadsd
                    dkfjldskf jdskjkjsddjkfdsndssjh jsakn
                  </td>
                  <td className='px-4 py-2 '>Clocks</td>
                  <td className='px-4 py-2  '>A</td>
                  <td className='px-4 py-2   flex gap-8'>
                    <SquarePen size={16} className='text-blue-400' />
                    <Trash2 size={16} className='text-red-400' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageQuestion;
