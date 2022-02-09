const readline = require('readline-sync');

const guessingGame = () => {
  console.log('JOGO DA ADIVINHAÇAO');
  const randomNumber = Math.floor(Math.random() * 11);
  const userNumber = readline.questionInt('Digite um numero de 0 a 10: ');
  console.log(`Numero sorteado: ${randomNumber}`);
  
  if (randomNumber === userNumber) {
    console.log('Parabens, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O numero era ${randomNumber}`);
  }

  const playAgain = readline.question('Deseja jogar novamente? (s/n) ');
  
  if (playAgain === 's' || playAgain === 'S') {
    startGame();
  } else if (playAgain === 'n' || playAgain === 'N') {
    console.log('Fim do jogo');
  }
};

const startGame = () => guessingGame();
startGame();

module.exports = startGame;