// Parte I

/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; */

/* Exercício 1
console.log(`Bem-vinda, ${info.personagem}`); */

// Exercício 2
// info.recorrente = 'Sim';

// console.log(info);

/* Exercício 3
for (key in info) {
  console.log(key);
} */

/* Exercício 4
for (key in info) {
  console.log(info[key]);
} */

/* Exercício 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log(`${info.personagem} e ${info2.personagem}`);
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);

if (info.recorrente === info2.recorrente) {
  console.log('Ambos recorrentes');
} else {
  console.log(`${info.recorrente} e ${info2.recorrente}`);
} */

//Parte II

/* Exercício 1
function checkPalindrome(word) {
  let reverse = word.split('').reverse().join('');
  
  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('ovo')); */

/* Exercício 2
let arr = [2, 3, 6, 7, 10, 1];

function largest(arr) {
  let maior = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      maior = index;
    }
  }
  return maior;
} */

/* Exercício 3
let arr = [2, 4, 6, 7, 10, 0, -3];

function smaller(arr) {
  menor = Math.min(...arr);
  indexMenor = arr.indexOf(menor);

  return indexMenor;
}

console.log(smaller(arr)); */

/* Exercício 4
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largestName(arr) {
  let arr2 = [];
  for (let nome of arr) {
    arr2.push(nome.length);
  }
  
  let maior = Math.max(...arr2);
  
  for (let nome of arr) {
    if (nome.length >= maior) {
      maiorNome = nome;
    }
  }
  return maiorNome;
}

console.log(largestName(nomes)); */

/* 
  EXERCÍCIO 5 
*/

/* Exercício 6
function somatorio(n) {
  soma = 0;
  for (let i = 1; i <= n; i += 1) {
    soma += i;
  }
  
  return soma;
}

console.log(somatorio(6)); */

/* Exercício 7
function endOfWord(word, ending) {
  if (word.slice(-2) === ending.slice(-2)) {
    return true;
  } else {
    return false;
  }
}

console.log(endOfWord('Trybe', 'ybe')); */
