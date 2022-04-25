import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export function prime(name) {
  const randomNumber = Math.round(Math.floor(Math.random() * 100 + 1));
  let answerComputer = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      answerComputer = 'no';
      break;
    }
  }
  console.log(`Question: ${randomNumber}`);
  const answerUser = readlineSync.question('Your answer: ');
  if (answerUser === answerComputer) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${name}`);
  return false;
}
