import { randomer } from '../src/random.js';

// eslint-disable-next-line import/prefer-default-export
const calculateAnswerComputer = (randomNumberFirst, randomNumberSecond) => {
  let answerComputer = 0;
  let maxNumber = randomNumberFirst;
  if (maxNumber < randomNumberSecond) {
    maxNumber = randomNumberSecond;
  }
  for (let i = 1; i <= maxNumber; i += 1) {
    if (randomNumberFirst % i === 0 && randomNumberSecond % i === 0) {
      answerComputer = i;
    }
  } return answerComputer;
};
function gcd() {
  const randomNumberFirst = randomer(100, 1);
  const randomNumberSecond = randomer(100, 1);
  const question = (`${randomNumberFirst} ${randomNumberSecond}`);
  const answerComputer = calculateAnswerComputer(randomNumberFirst, randomNumberSecond);
  return [question, answerComputer.toString()];
}
export default gcd;
