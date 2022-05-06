import getRandomer from '../random.js';
import game from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculateNumber = (randomNumberFirst, randomNumberSecond, maxNumber) => {
  let number;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (randomNumberFirst % i === 0 && randomNumberSecond % i === 0) {
      number = i;
    }
  }

  return number;
};

const getMaxNumber = (randomNumberFirst, randomNumberSecond) => {
  let maxNumber = randomNumberFirst;
  if (maxNumber < randomNumberSecond) {
    maxNumber = randomNumberSecond;
  }

  return maxNumber;
};

const calculateAnswerComputer = (randomNumberFirst, randomNumberSecond) => {
  const maxNumber = getMaxNumber(randomNumberFirst, randomNumberSecond);

  return calculateNumber(randomNumberFirst, randomNumberSecond, maxNumber);
};

const getGameLogic = () => {
  const randomNumberFirst = getRandomer(100, 1);
  const randomNumberSecond = getRandomer(100, 1);
  const question = (`${randomNumberFirst} ${randomNumberSecond}`);
  const answerComputer = String(calculateAnswerComputer(randomNumberFirst, randomNumberSecond));

  return [question, answerComputer];
};

const startGame = () => {
  game(task, getGameLogic);
};

export default startGame;
