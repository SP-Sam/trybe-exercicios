const readline = require('readline-sync');

const velocity = () => {
  const distance = readline.questionInt('Distancia total da corrida (m): ');
  const duration = readline.questionInt('Tempo da corrida (s): ');
  const avgVelocity = distance / duration;
  console.log(`Velocidade media do carro -> ${avgVelocity.toFixed(2)} m/s`);
};

velocity();

module.exports = velocity;