import readlineSync from 'readline-sync';

import
{ calc } from './cli-calc.js';

// eslint-disable-next-line import/prefer-default-export
export const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  let i = 1;
  while (i <= 3) {
    if (calc(name) === true) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}`);
};
