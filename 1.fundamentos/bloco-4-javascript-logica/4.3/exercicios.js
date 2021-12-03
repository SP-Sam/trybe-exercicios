
/* Exercicio 1
let n = 5;
let ast = '*';
let linha = '';

for (let i = 0; i < n; i += 1) {
  linha += ast;
}

for (let i = 0; i < n; i += 1) {
  console.log(linha);
} */

/* Exercício 2 (Entendido e resolvido com a ajuda do gabarito)
let n = 5;
let ast = '*';
let linha = '';

for (let i = 0; i <= n; i += 1) {
  console.log(linha);
  linha += ast;
} */

/* Exercício 3 (Entendido e resolvido com a ajuda do gabarito)
let n = 5;
let ast = '*';
let linha = '';
let posicao = n;

for (let l = 0; l < n; l += 1) {
  for (let c = 0; c <= n; c += 1) {
    if (c < posicao) {
      linha += ' ';
    } else {
      linha += ast;
    }
  }
  console.log(linha);
  linha  = '';
  posicao -= 1;
} */

/* Exercício 4 (Entendido e resolvido com a ajuda do gabarito)
let n = 5;
let ast = '*';
let linha = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let l = 0; l <= meio; l += 1) {
  for (let c = 0; c <= n; c += 1) {
    if (c > esquerda && c < direita) {
      linha += ast;
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
  linha = '';
  esquerda -= 1;
  direita += 1;
} */
