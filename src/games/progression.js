import getRandomer from '../random.js';
import game from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = (firstIndex, stringLength, numberProgression) => {
  const mass = [];
  mass[0] = firstIndex;
  for (let i = 1; i < stringLength; i += 1) {
    const newNumber = mass[i - 1] + numberProgression;
    mass.push(newNumber);
  }
  return mass;
};

const getGameLogic = () => {
  const stringLength = getRandomer(5, 6);
  const passIndex = getRandomer(stringLength);
  const numberProgression = getRandomer(5, 1);
  const firstIndex = getRandomer(15, 2);
  const newProgression = getProgression(firstIndex, stringLength, numberProgression);
  const answerComputer = newProgression[passIndex];
  newProgression[passIndex] = ['..'];
  const question = newProgression.join(' ');
  return [question, answerComputer.toString()];
};

const startGame = () => {
  game(task, getGameLogic);
};

export default startGame;

