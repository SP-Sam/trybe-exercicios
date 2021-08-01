// .unshift() = Adiciona elemento no inicio do array
// .push() = Adiciona elemento no final do array
// .shift = Remove o primeiro elemento do array
// .pop() = Remove o último elemento do array
// .indexof('item') = Retorna o indice de um item do array

/* Exercício 1 - Arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices); */

/* Exercício 2 - Arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfólio = menu.indexOf('Portfólio');
console.log(indexOfPortfólio); */

/* Exercício 3 - Arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu); */

/* Exercício 1 = For
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
} */

/* let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
} */

/* let word = 'Hello';
for (letter of word) {
  console.log(letter);
} */

/* let arrOfNumbers = [5, 10, 15, 20];
for (sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
} */

let names = ['Samuel', 'João', 'Maria', 'Antônio', 'Margarida'];

for (name of names) {
  console.log(name);
}