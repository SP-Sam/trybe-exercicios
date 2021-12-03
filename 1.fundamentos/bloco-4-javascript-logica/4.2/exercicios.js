let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Exercício 1
for (let number of numbers) {
  console.log(number);
} */

/* Exercício 2
let soma = 0;
for (let number of numbers) {
  soma += number;
}
console.log(soma);
 */

/* Exercício 3
let soma = 0;
for (let number of numbers) {
  soma += number;
}
let media = soma / numbers.length;
console.log(media); */

/* Exercício 4
let soma = 0;
for (let number of numbers) {
  soma += number;
}
let media = soma / numbers.length;
console.log(media);
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igal a 20');
} */

/* Exercício 5
let maior = 0;
for (let number of numbers) {
  if (number > maior) {
    maior = number;
  }
}
console.log(maior); */

/* Exercício 6
let impar = 0;
for (let number of numbers) {
  if (number % 2 === 1) {
    impar += 1;
  }
}
if (impar > 0) {
  console.log(`${impar} valores impar encontrados`);
} else {
  console.log('Nenhum valor impar encontrado');
} */

/* Exercício 7
let menor = 100;
for (let number of numbers) {
  if (number < menor) {
    menor = number;
  }
}
console.log(menor); */

// Exercícíos 8 e 9 
let arr = [];
for (let i = 1; i <= 25; i += 1) {
  arr.push(i);
}
console.log(arr);
for (let item of arr) {
  console.log(`${item} / 2 = ${item / 2}`);
}