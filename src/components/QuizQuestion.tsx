import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { answerQuestion } from '../store/quizSlice';
import { CheckCircle2 } from 'lucide-react';

export function QuizQuestion() {
  const dispatch = useDispatch();
  const { questions, currentQuestion, userAnswers } = useSelector(
    (state: RootState) => state.quiz
  );
  const question = questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    dispatch(answerQuestion({
      questionId: question.id,
      selectedOption: optionIndex
    }));
  };

  const isAnswered = userAnswers.some(answer => answer.questionId === question.id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{question.text}</h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && handleAnswer(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              isAnswered
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-100 border-gray-300'
                : 'bg-white hover:bg-blue-50 border-gray-300'
            } border-2 flex items-center justify-between`}
          >
            <span>{option}</span>
            {isAnswered && index === question.correctAnswer && (
              <CheckCircle2 className="text-green-500" size={20} />
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}