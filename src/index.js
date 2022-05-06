import readlineSync from 'readline-sync';

const game = (task, getGamesLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  const roundNumber = 3;
  for (let i = 1; i <= roundNumber; i += 1) {
    const [question, answerComputer] = getGamesLogic();
    if (i === 1) { console.log(task); }
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === answerComputer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
