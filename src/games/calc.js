import randomer from '../random.js';

const calc = () => {
  const task = 'What is the result of the expression?';
  const operator = [
    '-',
    '+',
    '*'];
  const randomOperator = operator[randomer(2)];
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
  answerComputer = String(answerComputer);
  return [task, question, answerComputer];
};
export default calc;
