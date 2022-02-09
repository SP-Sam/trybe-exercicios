const readline = require('readline-sync');

const chooseAGame = () => {
  console.log('\n1 - Calculadora de IMC');
  console.log('2 - Calculadora de velocidade media');
  console.log('3 - Jogo da adivinhacao\n');

  const selectedScript = readline.questionInt('Qual script deseja executar? ');

  switch (selectedScript) {
    case 1:
      const bmiCalculator = require('./imc');
      break;
    case 2:
      const avgVelocity = require('./velocidade');
      break;
    case 3:
      const guessingGame = require('./sorteio');
    default:
      console.log('Opção invalida');
      break;
  }
};

chooseAGame();