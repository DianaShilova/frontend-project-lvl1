import randomer from '../random.js';

const prime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = randomer(100, 1);
  let answerComputer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answerComputer = 'no';
      break;
    }
  }
  return [task, question, answerComputer.toString()];
};
export default prime;
