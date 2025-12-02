import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/adminContext';
import { useUser } from '../../context/userContext';
import { toast } from 'react-hot-toast';

const QuestionBox = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answerStatus, setAnswerStatus] = useState({}); // stores correctness
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;

  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  const { getAllQuestions } = useAdmin();
  const { postSolvedQuestions } = useUser();

  useEffect(() => {
    (async () => {
      const data = await getAllQuestions();
      setQuestions(data);
    })();
  }, []);

  // ===== Submit Answer =====
  const handleSubmitAnswer = async (item, actualIndex) => {
    const selected = selectedOptions[actualIndex];
    if (!selected) return;

    const correct = item.answer; // from DB

    setAnswerStatus((prev) => ({
      ...prev,
      [actualIndex]: {
        selectedAnswer: selected,
        correctAnswer: correct,
      },
    }));

    // Save AI explanation history
    await postSolvedQuestions(item.question);
  };

  return (
    <div className='w-full flex flex-col items-center gap-6 max-h-[700px] overflow-y-auto'>
      <div className='w-full max-w-5xl'>
        {/* Question Cards */}
        {currentQuestions.map((item, index) => {
          const actualIndex = startIndex + index;
          const status = answerStatus[actualIndex];

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
                    if (key === status.correctAnswer)
                      bg = 'bg-green-100 border-green-500';
                    else if (key === status.selectedAnswer)
                      bg = 'bg-red-100 border-red-500';
                  } else if (selectedOptions[actualIndex] === key) {
                    bg = 'bg-blue-50 border-blue-300';
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
                    onClick={() => postSolvedQuestions(item.question)}
                  >
                    ✨ Ask AI
                  </button>

                  <button
                    className='bg-blue-500 text-white px-6 py-2 rounded-xl'
                    disabled={!selectedOptions[actualIndex]}
                    onClick={async () => {
                      const isCorrect =
                        selectedOptions[actualIndex] === item.answer;

                      await postSolvedQuestions({
                        qid: item._id,
                        question: item.question,
                        category: item.category,
                        isCorrect,
                      });

                      // highlight correct answer
                      setSelectedOptions((prev) => ({
                        ...prev,
                        [actualIndex]: selectedOptions[actualIndex],
                      }));

                      toast.success(
                        isCorrect ? 'Correct Answer!' : 'Wrong Answer'
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
