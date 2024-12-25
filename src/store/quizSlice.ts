import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, UserAnswer, QuizResult, QuizProgress } from '../types/quiz';
import { quizzes } from '../data/quizzes';

interface QuizState {
  currentQuiz: string | null;
  currentQuestion: number;
  questions: Question[];
  userAnswers: UserAnswer[];
  isComplete: boolean;
  result: QuizResult | null;
  progress: QuizProgress;
}

const initialState: QuizState = {
  currentQuiz: null,
  currentQuestion: 0,
  questions: [],
  userAnswers: [],
  isComplete: false,
  result: null,
  progress: {}
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<string>) => {
      const quiz = quizzes.find(q => q.id === action.payload);
      if (quiz) {
        state.currentQuiz = quiz.id;
        state.questions = quiz.questions;
        state.currentQuestion = 0;
        state.userAnswers = [];
        state.isComplete = false;
        state.result = null;
      }
    },
    answerQuestion: (state, action: PayloadAction<UserAnswer>) => {
      state.userAnswers.push(action.payload);
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      } else {
        state.isComplete = true;
        const score = state.userAnswers.reduce((acc, answer) => {
          const question = state.questions.find(q => q.id === answer.questionId);
          return question?.correctAnswer === answer.selectedOption ? acc + 1 : acc;
        }, 0);
        
        if (state.currentQuiz) {
          const quiz = quizzes.find(q => q.id === state.currentQuiz);
          if (quiz) {
            state.result = {
              quizId: state.currentQuiz,
              language: quiz.language,
              score,
              totalQuestions: state.questions.length,
              answers: state.userAnswers,
              completedAt: new Date().toISOString()
            };
            
            state.progress[state.currentQuiz] = {
              completed: true,
              score,
              totalQuestions: state.questions.length
            };
          }
        }
      }
    },
    resetQuiz: (state) => {
      state.currentQuiz = null;
      state.currentQuestion = 0;
      state.questions = [];
      state.userAnswers = [];
      state.isComplete = false;
      state.result = null;
    }
  }
});

export const { startQuiz, answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;