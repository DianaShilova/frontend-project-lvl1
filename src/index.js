import readlineSync from 'readline-sync';

const game = (gamesLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  let i = 1;
  const j = 3;
  while (i <= j) {
    const [task, question, answerComputer] = gamesLogic();
    if (i === 1) { console.log(task); }
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === answerComputer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
