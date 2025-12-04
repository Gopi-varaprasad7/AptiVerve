import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/adminContext';
import { useUser } from '../../context/userContext';
import { toast } from 'react-hot-toast';

const QuestionBox = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [loading, setLoading] = useState(false);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;

  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  const { getAllQuestions } = useAdmin();
  const { postSolvedQuestions, explain } = useUser();

  useEffect(() => {
    (async () => {
      const data = await getAllQuestions();
      setQuestions(data);
    })();
  }, []);

  // ===== Submit Answer =====
  const handleSubmitAnswer = async (
    questionId,
    question,
    category,
    selectedAnswer,
    options,
    correctAnswer
  ) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      toast.error('User not logged in!');
      return;
    }
    const selectedValue = options[selectedAnswer];
    const isCorrect = selectedValue === correctAnswer;

    // Update local state
    setAnswerStatus((prev) => ({
      ...prev,
      [questionId]: { selectedAnswer, correctAnswer },
    }));

    // Post to backend
    await postSolvedQuestions({
      userId,
      questionId,
      question,
      category,
      correct: isCorrect,
    });

    toast.success(
      isCorrect
        ? 'Correct Answer! 🎉'
        : `Wrong Answer! Correct is ${correctAnswer}`
    );
  };

  return (
    <div className='w-full flex flex-col items-center gap-6 max-h-[700px] overflow-y-auto'>
      <div className='w-full max-w-5xl'>
        {/* Question Cards */}
        {currentQuestions.map((item, index) => {
          const actualIndex = startIndex + index;
          const status = answerStatus[item._id];

          return (
            <div
              key={actualIndex}
              className='bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-6 transition-transform transform hover:scale-[1.01]'
            >
              {/* Difficulty */}
              <div
                className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-3 ${
                  item.difficulty === 'Easy'
                    ? 'bg-green-100 text-green-600'
                    : item.difficulty === 'Medium'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {item.difficulty}
              </div>

              {/* Question */}
              <h2 className='text-lg font-semibold text-gray-800 mb-4'>
                {item.question}
              </h2>

              {/* Options */}
              <div className='space-y-2'>
                {Object.entries(item.options).map(([key, value]) => {
                  let bg = 'border-gray-200 hover:bg-gray-50';

                  if (status) {
                    if (value === status.correctAnswer)
                      bg = 'bg-green-100 border-green-500';
                    else if (key === status.selectedAnswer)
                      bg = 'bg-red-100 border-red-500';
                  }

                  return (
                    <label
                      key={key}
                      className={`flex items-center border rounded-xl px-4 py-3 cursor-pointer transition ${bg}`}
                    >
                      <input
                        type='radio'
                        name={`question-${actualIndex}`}
                        value={key}
                        disabled={!!status}
                        checked={selectedOptions[actualIndex] === key}
                        onChange={(e) =>
                          setSelectedOptions((prev) => ({
                            ...prev,
                            [actualIndex]: e.target.value,
                          }))
                        }
                        className='mr-3 accent-blue-500'
                      />
                      <span className='text-gray-700'>{`${key}. ${value}`}</span>
                    </label>
                  );
                })}
              </div>

              {/* Footer */}
              <div className='flex justify-between items-center mt-6'>
                <div className='text-gray-500 text-sm'>
                  Category: <span className='font-medium'>{item.category}</span>
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    className='flex items-center gap-2 text-blue-600 border border-blue-200 rounded-xl px-4 py-2 hover:bg-blue-50 transition'
                    onClick={async () => {
                      setLoading(true);
                      setShowModal(true);

                      const aiText = await explain(item.question);

                      setModalContent(aiText);
                      setLoading(false);
                    }}
                  >
                    ✨ Ask AI
                  </button>

                  <button
                    className='bg-blue-500 text-white px-6 py-2 rounded-xl'
                    disabled={!selectedOptions[actualIndex]}
                    onClick={async () => {
                      handleSubmitAnswer(
                        item._id,
                        item.question,
                        item.category,
                        selectedOptions[actualIndex],
                        item.options,
                        item.ans
                      );
                    }}
                  >
                    Submit Answer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {showModal && (
          <div className='fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-2xl w-full max-w-lg shadow-xl animate-fadeIn'>
              <h2 className='text-xl font-semibold mb-3 text-gray-800'>
                AI Explanation
              </h2>

              <div className='text-gray-700 whitespace-pre-line max-h-80 overflow-y-auto border p-3 rounded-lg'>
                {modalContent}
              </div>

              <button
                onClick={() => setShowModal(false)}
                className='mt-5 bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600'
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className='flex justify-center items-center gap-3 mt-8'>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50'
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
