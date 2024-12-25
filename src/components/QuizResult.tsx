import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trophy, RefreshCw } from 'lucide-react';
import { RootState } from '../store/store';
import { resetQuiz } from '../store/quizSlice';

export function QuizResult() {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.quiz.result);

  if (!result) return null;

  const percentage = (result.score / result.totalQuestions) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <Trophy
          size={64}
          className={`mx-auto ${
            percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'
          }`}
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      
      <div className="text-4xl font-bold mb-6">
        {result.score} / {result.totalQuestions}
      </div>

      <div className="mb-8">
        <div className="h-4 bg-gray-200 rounded-full">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${
              percentage >= 70 ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-2 text-gray-600">
          {percentage}% Correct
        </div>
      </div>

      <button
        onClick={() => dispatch(resetQuiz())}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <RefreshCw size={20} className="mr-2" />
        Try Again
      </button>
    </div>
  );
}