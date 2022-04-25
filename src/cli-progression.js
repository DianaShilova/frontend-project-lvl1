import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export function progression(name) {
  const stringLength = Math.round(Math.floor(Math.random() * 6 + 5));
  const passIndex = Math.round(Math.floor(Math.random() * stringLength));
  const numberProgression = Math.round(Math.floor(Math.random() * 5 + 1));
  const firstIndex = Math.round(Math.floor(Math.random() * 15 + 2));
  const mass = [];
  mass[0] = firstIndex;
  for (let i = 1; i < stringLength; i += 1) {
    const newNumber = mass[i - 1] + numberProgression;
    mass.push(newNumber);
  }
  const answerComputer = mass[passIndex];
  mass[passIndex] = ['..'];
  console.log(`Question: ${mass}`);
  const answerUser = readlineSync.question('Your answer: ');
  if (Number(answerUser) === Number(answerComputer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
}
