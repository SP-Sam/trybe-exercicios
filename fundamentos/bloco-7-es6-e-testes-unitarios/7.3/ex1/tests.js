/* Exercício 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, '5 + 4 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
assert.strictEqual(sum(4, '5'), 9, '5 + 4 = 9'); */

/* Exercício 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const expected = myRemove([1, 2, 3, 4], 3);

// implemente seus testes aqui
assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);
let myArr = [1, 2, 3, 4];
myRemove(myArr, 2);
assert.deepStrictEqual(myArr, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); */

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

let myArr = [1, 2, 3, 4];
myRemove(myArr, 2);