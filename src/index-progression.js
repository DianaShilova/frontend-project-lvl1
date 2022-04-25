import readlineSync from 'readline-sync';

import
{ progression } from './cli-progression.js';

// eslint-disable-next-line import/prefer-default-export
export const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 1;
  while (i <= 3) {
    if (progression(name) === true) {
      i += 1;
    } else return;
  }
  console.log(`Congratulations, ${name}!`);
};
