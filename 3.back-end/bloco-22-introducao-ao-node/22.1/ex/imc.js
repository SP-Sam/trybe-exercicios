const readline = require('readline-sync');

const bmi = () => {
  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionFloat('Qual sua altura (m)? ');
  const imc = (weight / Math.pow(height, 2)).toFixed(2);
  let status = '';

  if (imc < 18.5) status = 'Abaixo do peso (magreza)';
  else if (imc < 25) status = 'Peso normal';
  else if (imc < 30) status = 'Acima do peso (sobrepeso)';
  else if (imc < 35) status = 'Obesidade grau I';
  else if (imc < 40) status = 'Obesidade grau II';
  else if (imc >= 40) status = 'Obesidade graus III e IV';

  console.log(`Seu IMC é ${imc} - ${status}`);
};

bmi();

module.exports = bmi;