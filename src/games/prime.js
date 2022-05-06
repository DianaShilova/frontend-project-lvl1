import getRandomer from '../random.js';
import game from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  let answerComputer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answerComputer = 'no';
      return answerComputer;
    }
  } return answerComputer;
};

const getGameLogic = () => {
  const question = getRandomer(100, 1);
  const answerComputer = isPrime(question);
  return [question, answerComputer.toString()];
};

const startGame = () => {
  game(task, getGameLogic);
};

export default startGame;
