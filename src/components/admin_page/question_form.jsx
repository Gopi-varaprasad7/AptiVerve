import React from 'react';
import { Plus } from 'lucide-react';
import { useAdmin } from '../../context/adminContext.jsx';
import { useState } from 'react';

const Question_Form = () => {
  const { createQuestion } = useAdmin();

  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async () => {
    if (
      !category ||
      !question ||
      !options.A ||
      !options.B ||
      !options.C ||
      !options.D ||
      !correctAnswer
    ) {
      alert('Please fill all fields');
      return;
    }
    const questionData = {
      category: category,
      question,
      options,
      ans: correctAnswer,
    };
    try {
      await createQuestion(questionData);
      // Clear form after successful creation
      setCategory('');
      setQuestion('');
      setOptions({ A: '', B: '', C: '', D: '' });
      setCorrectAnswer('');
    } catch (error) {
      console.log(error);
    }
  };
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
          <select
            className='w-full border border-gray-300 text-gray-400 rounded-md p-2 mt-2 mb-4'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>Select Category</option>
            <option>Clocks</option>
            <option>Trains</option>
            <option>Work</option>
            <option>Profit & Loss</option>
            <option>Percentage</option>
            <option>Ratio</option>
          </select>
          <label>Question*</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 mt-2 mb-4'
            rows={4}
            placeholder='Enter the question here'
          ></textarea>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {['A', 'B', 'C', 'D'].map((opt) => (
                <input
                  key={opt}
                  type='text'
                  value={options[opt]}
                  onChange={(e) =>
                    setOptions({ ...options, [opt]: e.target.value })
                  }
                  className='w-full border border-gray-300 rounded-md p-2'
                  placeholder={`Option ${opt}`}
                />
              ))}
            </div>
          </div>
          <label>Correct Answer*</label>
          <input
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            type='text'
            className='w-full border border-gray-300 rounded-md p-2 mt-2 mb-4'
            placeholder='Enter the correct answer here'
          />
          <div className='flex gap-4'>
            <button
              className='w-32 h-10 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition'
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className='w-32 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition'
              onClick={() => {
                setCategory('');
                setQuestion('');
                setOptions({ A: '', B: '', C: '', D: '' });
                setCorrectAnswer('');
              }}
            >
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Question_Form;
