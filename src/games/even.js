import randomer from '../random.js';

const isEven = () => {
  const task = 'Answer "yes" if number is even, otherwise answer "no".';
  const question = randomer(100);
  let answerComputer;
  if (question % 2 === 0) {
    answerComputer = 'yes';
  } else { answerComputer = 'no'; }
  return [task, question, answerComputer];
};
export default isEven;
