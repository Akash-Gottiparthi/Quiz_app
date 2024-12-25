import { Quiz } from '../types/quiz';
import { javascriptQuestions } from './questions/javascript';
import { pythonQuestions } from './questions/python';
import { rustQuestions } from './questions/rust';
import { sqlQuestions } from './questions/sql';

export const quizzes: Quiz[] = [
  {
    id: 'javascript',
    language: 'JavaScript',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript core concepts',
    icon: 'Code2',
    questions: javascriptQuestions
  },
  {
    id: 'python',
    language: 'Python',
    title: 'Python Mastery',
    description: 'Challenge yourself with Python programming concepts',
    icon: 'Terminal',
    questions: pythonQuestions
  },
  {
    id: 'rust',
    language: 'Rust',
    title: 'Rust Programming',
    description: 'Learn systems programming with Rust',
    icon: 'Blocks',
    questions: rustQuestions
  },
  {
    id: 'sql',
    language: 'SQL',
    title: 'SQL Database',
    description: 'Master database queries and management',
    icon: 'Database',
    questions: sqlQuestions
  }
];