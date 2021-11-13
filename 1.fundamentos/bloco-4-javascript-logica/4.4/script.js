/* Objetos
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`);
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalahas de prata`); */


// For/in
/* Exercicio 1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let i in names) {
  console.log(`Olá ${names[i]}`);
} */

/* let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car) {
  console.log(i, car[i]);
} */

//Funções
var statusCarro = 'desligado';
var aceleracao = 0;
var rotacaoVolante = 0;

function ligarDesligar() {
  if (statusCarro === 'desligado') {
    statusCarro = 'ligado';
  } else {
    statusCarro = 'desligado';
  }

  return statusCarro;
}

function acelerar(incremento) {
  aceleracao += incremento;

  return `Acelerando a ${aceleracao} m/s²`
}

function frear(decremento) {
  aceleracao -= decremento;

  return `Desacelerando para ${aceleracao} m/s²`;
}

function girarVolante(anguloRotacao) {
  rotacaoVolante = anguloRotacao;

  return `${rotacaoVolante}° de rotação`;
}

console.log(ligarDesligar());
console.log(acelerar(25));
console.log(girarVolante(90));
console.log(frear(10));
console.log(girarVolante(0));
console.log(frear(15));
console.log(ligarDesligar());
