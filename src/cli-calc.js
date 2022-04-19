import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export function calc(name) {
  const operator = [
    '-',
    '+',
    '*'];
  const randomOperator = operator[Math.floor(Math.random() * 3)];
  const randomNumberFirst = Math.round(Math.floor(Math.random() * 100));
  const randomNumberSecond = Math.round(Math.floor(Math.random() * 100));
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
  console.log('What is the result of the expression?');
  console.log(`Question: ${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);
  const answerUser = readlineSync.question('Your answer: ');
  if (Number(answerUser) === answerComputer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.`);
  console.log(`Let,s try again, ${name}`);
  return false;
}
