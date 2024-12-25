import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Code2, Terminal, Blocks, Database } from 'lucide-react';
import { RootState } from '../store/store';
import { quizzes } from '../data/quizzes';
import { startQuiz } from '../store/quizSlice';

const icons = {
  Code2,
  Terminal,
  Blocks,
  Database
};

export function HomePage() {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.quiz.progress);

  const handleStartQuiz = (quizId: string) => {
    dispatch(startQuiz(quizId));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your Path</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => {
          const Icon = icons[quiz.icon as keyof typeof icons];
          const quizProgress = progress[quiz.id] || { completed: false, score: 0, totalQuestions: quiz.questions.length };
          const percentage = quizProgress.completed 
            ? (quizProgress.score / quizProgress.totalQuestions) * 100 
            : 0;

          return (
            <div
              key={quiz.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{quiz.language}</h2>
                  <p className="text-gray-600">{quiz.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{Math.round(percentage)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => handleStartQuiz(quiz.id)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {quizProgress.completed ? 'Retake Quiz' : 'Start Quiz'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}