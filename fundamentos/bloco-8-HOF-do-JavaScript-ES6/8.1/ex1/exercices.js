/* Exercício 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createPerson = (name) => {
  return {
    name: name,
    email: `${name}@trybe.com`
  }
};

console.log(newEmployees(createPerson)); */

/* Exercício 2
const raffle = (n, callback) => {
  const randomNumber = Math.ceil(Math.random() * 5);

  return `Número escolhido: ${n}
Número sorteado: ${randomNumber}
${callback(n, randomNumber)}`;
};

const check = (n, random) => {
  if (n === random) return 'Parabéns você ganhou';

  return 'Tente novamente';
};

console.log(raffle(3, check)); */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countAnswers = (rightAnsers, studentAnswers, callback) => {
  return `Pontuação total: ${callback(rightAnsers, studentAnswers)}`;
};

const checkAnswers = (rA, sA) => {
  let points = 0;

  for (let i in rA) {
    if (rA[i] === sA[i]) points += 1;
    if (rA[i] !== sA[i]) points -= 0.5;
  }

  return points;
};

console.log(countAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));