import getRandomer from '../random.js';
import game from '../index.js';

const task = 'What is the result of the expression?';

const getRandomCalc = (randomNumFirst, randomNumSecond, randomOperator) => {
  switch (randomOperator) {
    case '-':
      return (randomNumFirst - randomNumSecond);
    case '+':
      return (randomNumFirst + randomNumSecond);
    case '*':
      return (randomNumFirst * randomNumSecond);
    default:
      return console.log('Error');
  }
};

const getGamesLogic = () => {
  const operator = [
    '-',
    '+',
    '*'];
  const randomOperator = operator[getRandomer(2)];
  const randomNumFirst = getRandomer(100);
  const randomNumSecond = getRandomer(100);
  const question = [`${randomNumFirst} ${randomOperator} ${randomNumSecond}`];
  const answerComputer = String(getRandomCalc(randomNumFirst, randomNumSecond, randomOperator));
  return [question, answerComputer];
};

const startGame = () => {
  game(task, getGamesLogic);
};

export default startGame;
