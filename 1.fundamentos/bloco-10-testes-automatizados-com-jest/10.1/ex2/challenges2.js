// Desafio 10
function techList(array, name) {
  array.sort();
  let result = [];

  array.forEach((item) =>
    result.push({ tech: item, name: name}));

  if (array.length === 0) return 'Vazio!';

  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a + b < c || Math.abs(a - b) > c) {
    return false;
  } else if (a + c < b || Math.abs(a - c) > b) {
    return false;
  } else if (c + b < a || Math.abs(c - b) > a) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  const split = string.split(' ').filter(n => (Number(n) || n == 0)).join('');
  const arr = [...split];
  const arrToNumber = [];
  arr.forEach((num) => {
    arrToNumber.push(parseInt(num));
  });
  
  const result = arrToNumber.reduce((acc, curr) => acc + curr, 0);

  if (result === 1) return `${result} copo de água`;
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
