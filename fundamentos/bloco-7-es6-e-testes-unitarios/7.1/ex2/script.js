/* Exercício 1
const fatorial = (n) => {
  if (n === 0) return 1;

  let result = n;
  while (n > 2) {
    result *= n -= 1;
  }
  return result;
}

console.log(fatorial(6)); */

/* Exercício 2
const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maior = '';

  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i].length > maior.length) {
      maior = palavras[i];
    };
  }

  return maior;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')); */

/* Exercício 3
const button = document.querySelector('button');
let texto = document.getElementById('texto');
let count = 0;

button.addEventListener('click', () => {
  count += 1;
  texto.innerHTML = `Clicks no botão = ${count}`;
}) */

let modificaX = (string) => {
  let string1 = 'Tryber x aqui!';
  let novaString = string1.replace('x', string);

  return novaString;
}

let result1 = modificaX('Samuel');

const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'Python'];

let concat = (string) => {
  let result = `${string} Minhas 5 principais habilidades são:
  * ${skills[0]}
  * ${skills[1]}
  * ${skills[2]}
  * ${skills[3]}
  * ${skills[4]}`;

  return result;
}

console.log(concat(result1));