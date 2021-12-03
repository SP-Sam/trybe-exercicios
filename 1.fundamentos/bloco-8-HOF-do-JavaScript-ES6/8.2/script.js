/* Exercício 1
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList); */

/* Exercício 2
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (arr) => {
  // Adiciona seu código aqui
  const result = arr.find(item => item % 3 === 0 && item % 5 === 0);
  return result;
}

console.log(findDivisibleBy3And5(numbers)); */

/* Exercício 3
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => {
  // Adicione seu código aqui:
  const fiveLetters = arr.find(nome => nome.length >= 5);
  return fiveLetters;
}

console.log(findNameWithFiveLetters(names)); */

/* Exercício 4
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const rightMusic = musicas.find((musica) => {
    if (musica.id === id) return musica;
  });

  return rightMusic.title;
}

console.log(findMusic('31031685')); */

/* Exercício 5
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const result = arr.some(nome => nome === name);

  return result;
}

console.log(hasName(names, 'Ana')); */

/* Exercício 6
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const result = arr.every(people => people.age >= minimumAge);

  return result;
}

console.log(verifyAges(people, 18)); */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
// const age = people.sort((a, b) => a.age - b.age);

const decrescentAge = people.sort((a, b) => b.age - a.age);

/* const name = people.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
}); */

// console.log(age);
console.log(decrescentAge);