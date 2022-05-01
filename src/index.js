import readlineSync from 'readline-sync';

const game = (task, gamesLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let i = 1;
  while (i <= 3) {
    const [question, answerComputer] = gamesLogic();
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
