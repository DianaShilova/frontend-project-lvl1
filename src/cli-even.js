import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export function isEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    const randomNumber = Math.round(Math.floor(Math.random() * 100));
    let answerComputer;
    if (randomNumber % 2 === 0) {
      answerComputer = 'yes';
    } else { answerComputer = 'no'; }
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === answerComputer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 1;
      console.log(`Let,s try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
}
