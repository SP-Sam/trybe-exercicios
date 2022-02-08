const readline = require('readline-sync');

const name = readline.question('Digite seu nome: ');
const age = readline.questionInt('Digite sua idade: ');

console.log(`Hello ${name}, you are ${age} years old!`);