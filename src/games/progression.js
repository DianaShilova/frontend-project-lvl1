import randomer from '../random.js';

const progression = () => {
  const task = 'What number is missing in the progression?';
  const stringLength = randomer(5, 6);
  const passIndex = randomer(stringLength);
  const numberProgression = randomer(5, 1);
  const firstIndex = randomer(15, 2);
  const mass = [];
  mass[0] = firstIndex;
  for (let i = 1; i < stringLength; i += 1) {
    const newNumber = mass[i - 1] + numberProgression;
    mass.push(newNumber);
  }
  const answerComputer = mass[passIndex];
  mass[passIndex] = ['..'];
  const question = mass.join(' ');
  return [task, question, answerComputer.toString()];
};
export default progression;
