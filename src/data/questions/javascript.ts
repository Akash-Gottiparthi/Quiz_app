import { Question } from '../../types/quiz';

export const javascriptQuestions: Question[] = [
  {
    id: 'js1',
    text: 'What is the output of: console.log(typeof typeof 1)?',
    options: ['number', 'string', 'undefined', 'object'],
    correctAnswer: 1
  },
  {
    id: 'js2',
    text: 'Which method removes the last element from an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswer: 0
  },
  {
    id: 'js3',
    text: 'What is closure in JavaScript?',
    options: [
      'A function that has access to variables in its outer scope',
      'A method to close browser window',
      'A way to end a loop',
      'A type of error'
    ],
    correctAnswer: 0
  },
  {
    id: 'js4',
    text: 'What is the purpose of the "use strict" directive?',
    options: [
      'To enable strict type checking',
      'To catch common coding mistakes',
      'To improve performance',
      'To enable new JavaScript features'
    ],
    correctAnswer: 1
  },
  {
    id: 'js5',
    text: 'What is event bubbling?',
    options: [
      'Creating multiple events',
      'Event propagation from child to parent elements',
      'Removing event listeners',
      'Adding event listeners'
    ],
    correctAnswer: 1
  },
  {
    id: 'js6',
    text: 'What is the output of: [1,2,3] + [4,5,6]?',
    options: ['[1,2,3,4,5,6]', '1,2,34,5,6', 'Error', '21'],
    correctAnswer: 1
  },
  {
    id: 'js7',
    text: 'What is the purpose of Promise.all()?',
    options: [
      'To wait for all promises to resolve',
      'To execute promises in sequence',
      'To cancel promises',
      'To create new promises'
    ],
    correctAnswer: 0
  },
  {
    id: 'js8',
    text: 'What is the difference between null and undefined?',
    options: [
      'They are exactly the same',
      'null is assigned, undefined is default',
      'undefined is a type, null is an object',
      'null is a type, undefined is an object'
    ],
    correctAnswer: 1
  },
  {
    id: 'js9',
    text: 'What is the purpose of the Map object?',
    options: [
      'To create arrays',
      'To store key-value pairs',
      'To transform data',
      'To handle errors'
    ],
    correctAnswer: 1
  },
  {
    id: 'js10',
    text: 'What is the output of: 0.1 + 0.2 === 0.3?',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 1
  }
];