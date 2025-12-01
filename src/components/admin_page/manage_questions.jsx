import { useEffect, useState } from 'react';
import { Trash2, SquarePen } from 'lucide-react';
import { useAdmin } from '../../context/adminContext.jsx';

const ManageQuestion = () => {
  const list = ['ID', 'Question', 'Category', 'Correct Answer', 'Actions'];
  const [questions, setQuestions] = useState([]);
  const [editQuestionState, setEditQuestionState] = useState(false);
  const [deleteQuestionState, setDeleteQuestionState] = useState(false);
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const { getAllQuestions, deleteQuestion, editQuestion } = useAdmin();

  const filteredQuestions = selectedCategory
    ? questions.filter((q) => q.category === selectedCategory)
    : questions;
  useEffect(() => {
    (async () => {
      const data = await getAllQuestions();
      setQuestions(data);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editQuestion(selectedQuestion, {
        category,
        question,
        options,
        ans: correctAnswer,
      });
      setEditQuestionState(false);
    } catch (error) {
      console.log(error);
    }
  };
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
          <select
            className='w-full border border-gray-300 text-gray-400 rounded-md p-2 mt-2 mb-4'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
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
                {filteredQuestions?.length > 0 ? (
                  filteredQuestions.map((q, index) => (
                    <tr key={q._id || index}>
                      <td className='px-4 py-2'>{index + 1}</td>

                      <td className='px-4 py-2 whitespace-normal'>
                        {q.question}
                      </td>

                      <td className='px-4 py-2'>{q.category}</td>

                      <td className='px-4 py-2'>{q.correctAnswer}</td>

                      <td className='px-4 py-2 flex gap-8'>
                        <SquarePen
                          size={16}
                          className='text-blue-400 cursor-pointer'
                          onClick={() => {
                            setSelectedQuestion(q._id);
                            setCategory(q.category);
                            setQuestion(q.question);
                            setOptions(q.options);
                            setCorrectAnswer(q.correctAnswer);
                            setEditQuestionState(true);
                          }}
                        />
                        {editQuestionState && (
                          <div className='fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center'>
                            <div className='bg-white p-6 rounded-lg shadow-lg w-1/2'>
                              <h2 className='text-xl font-bold mb-4'>
                                Edit Question
                              </h2>
                              <form onSubmit={handleSubmit}>
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
                                          setOptions({
                                            ...options,
                                            [opt]: e.target.value,
                                          })
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
                                  onChange={(e) =>
                                    setCorrectAnswer(e.target.value)
                                  }
                                  type='text'
                                  className='w-full border border-gray-300 rounded-md p-2 mt-2 mb-4'
                                />
                                <button
                                  className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
                                  onClick={() => setEditQuestionState(false)}
                                >
                                  Close
                                </button>
                                <button
                                  className='mt-4 px-4 py-2 ml-2 bg-blue-500 text-white rounded'
                                  type='submit'
                                >
                                  Confirm Edit
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                        <Trash2
                          size={16}
                          className='text-red-400 cursor-pointer'
                          onClick={() => setDeleteQuestionState(true)}
                        />
                        {deleteQuestionState && (
                          <div className='fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center'>
                            <div className='bg-white p-6 rounded-lg shadow-lg w-1/3'>
                              <h2 className='text-xl font-bold mb-4'>
                                Confirm Deletion
                              </h2>
                              <p>
                                Are you sure you want to delete this question?
                              </p>
                              <div className='mt-4 flex justify-end gap-4'>
                                <button
                                  className='px-4 py-2 bg-gray-300 rounded'
                                  onClick={() => setDeleteQuestionState(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className='px-4 py-2 bg-red-500 text-white rounded'
                                  onClick={() => deleteQuestion(q._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className='text-center py-4 text-gray-500'>
                      No questions available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageQuestion;
