import getRandomer from '../random.js';
import game from '../index.js';

const task = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = (question) => {
  let answerComputer = 'no';
  if (question % 2 === 0) {
    answerComputer = 'yes';
  }
  return answerComputer;
};

const getGameLogic = () => {
  const question = getRandomer(100);
  const answerComputer = isEven(question);
  return [question, answerComputer];
};

const startGame = () => {
  game(task, getGameLogic);
};

export default startGame;
