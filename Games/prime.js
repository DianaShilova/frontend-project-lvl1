import { randomer } from '../src/random.js';

// eslint-disable-next-line import/prefer-default-export
export function prime() {
  const question = randomer(100, 1);
  let answerComputer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answerComputer = 'no';
      break;
    }
  }
  return [question, answerComputer.toString()];
}
