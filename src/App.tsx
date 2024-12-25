import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Brain } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function QuizApp() {
  const { currentQuiz, isComplete } = useSelector((state: RootState) => state.quiz);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Brain size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Programming Quiz</h1>
        </div>

        {!currentQuiz ? (
          <HomePage />
        ) : isComplete ? (
          <QuizResult />
        ) : (
          <QuizQuestion />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <QuizApp />
    </Provider>
  );
}

export default App;