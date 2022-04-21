import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export function gcd(name) {
  const randomNumberFirst = Math.round(Math.floor(Math.random() * 100 + 1));
  const randomNumberSecond = Math.round(Math.floor(Math.random() * 100 + 1));
  let answerComputer = 0;
  let maxNumber = randomNumberFirst;
  if (maxNumber < randomNumberSecond) {
    maxNumber = randomNumberSecond;
  }
  for (let i = 1; i <= maxNumber; i += 1) {
    if (randomNumberFirst % i === 0 && randomNumberSecond % i === 0) {
      answerComputer = i;
    }
  }
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
  const answerUser = readlineSync.question('Your answer: ');
  if (Number(answerUser) === answerComputer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.`);
  console.log(`Let,s try again, ${name}`);
  return false;
}
