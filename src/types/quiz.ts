export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  language: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number;
}

export interface QuizResult {
  quizId: string;
  language: string;
  score: number;
  totalQuestions: number;
  answers: UserAnswer[];
  completedAt: string;
}

export interface QuizProgress {
  [key: string]: {
    completed: boolean;
    score: number;
    totalQuestions: number;
  };
}