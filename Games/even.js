import { randomer } from '../src/random.js';

// eslint-disable-next-line import/prefer-default-export
export function isEven() {
  const question = randomer(100);
  let answerComputer;
  if (question % 2 === 0) {
    answerComputer = 'yes';
  } else { answerComputer = 'no'; }
  return [question, answerComputer];
}
