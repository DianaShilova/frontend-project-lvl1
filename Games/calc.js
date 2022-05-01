import { randomer } from '../src/random.js';
// eslint-disable-next-line import/prefer-default-export
export function calc() {
  const operator = [
    '-',
    '+',
    '*'];
  const randomOperator = operator[Math.floor(Math.random() * 3)];
  const randomNumberFirst = randomer(100);
  const randomNumberSecond = randomer(100);
  const question = [`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`];
  let answerComputer;
  switch (randomOperator) {
    case '-':
      answerComputer = randomNumberFirst - randomNumberSecond;
      break;
    case '+':
      answerComputer = randomNumberFirst + randomNumberSecond;
      break;
    case '*':
      answerComputer = randomNumberFirst * randomNumberSecond;
      break;
    default:
      console.log('Error');
  }
  return [question, answerComputer.toString()];
}
