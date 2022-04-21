import readlineSync from 'readline-sync';

import
{ gcd } from './cli-gcd.js';

// eslint-disable-next-line import/prefer-default-export
export const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  let i = 1;
  while (i <= 3) {
    if (gcd(name) === true) {
      i += 1;
    } else { i = 1; }
  }
  console.log(`Congratulations, ${name}`);
};
