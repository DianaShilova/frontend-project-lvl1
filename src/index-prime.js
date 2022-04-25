import readlineSync from 'readline-sync';

import
{ prime } from './cli-prime.js';

// eslint-disable-next-line import/prefer-default-export
export const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    if (prime(name) === true) {
      i += 1;
    } else return;
  }
  console.log(`Congratulations, ${name}!`);
};
