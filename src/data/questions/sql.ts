import { Question } from '../../types/quiz';

export const sqlQuestions: Question[] = [
  {
    id: 'sql1',
    text: 'What is the difference between INNER and LEFT JOIN?',
    options: [
      'INNER JOIN returns matching rows, LEFT JOIN includes all left table rows',
      'They are the same',
      'LEFT JOIN is faster',
      'INNER JOIN includes all rows from both tables'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql2',
    text: 'What is a primary key?',
    options: [
      'A column that uniquely identifies each row',
      'The first column in a table',
      'A column that can contain NULL values',
      'A column that references another table'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql3',
    text: 'What is normalization?',
    options: [
      'A process to organize data to reduce redundancy',
      'A way to speed up queries',
      'A type of JOIN operation',
      'A way to backup data'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql4',
    text: 'What is a transaction?',
    options: [
      'A unit of work that is atomic, consistent, isolated, and durable',
      'A type of table',
      'A way to join tables',
      'A backup operation'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql5',
    text: 'What is an index?',
    options: [
      'A data structure that improves query performance',
      'A type of JOIN',
      'A primary key',
      'A foreign key'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql6',
    text: 'What is a view?',
    options: [
      'A virtual table based on a SELECT query',
      'A physical table',
      'A type of JOIN',
      'A backup copy'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql7',
    text: 'What is a stored procedure?',
    options: [
      'A prepared SQL code that can be saved and reused',
      'A type of table',
      'A way to store data',
      'A backup method'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql8',
    text: 'What is a trigger?',
    options: [
      'A special procedure that runs automatically on data changes',
      'A type of query',
      'A way to join tables',
      'A backup operation'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql9',
    text: 'What is a foreign key?',
    options: [
      'A column that references a primary key in another table',
      'A unique identifier',
      'A type of index',
      'A backup key'
    ],
    correctAnswer: 0
  },
  {
    id: 'sql10',
    text: 'What is the purpose of GROUP BY?',
    options: [
      'To group rows that have the same values',
      'To sort data',
      'To join tables',
      'To filter data'
    ],
    correctAnswer: 0
  }
];