// Exercício 1
const calculate = (numA, numB, numC) => {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof numA != 'number' ||
      typeof numB != 'number' ||
      typeof numC != 'number'
    ) reject(new Error('Informe apenas numeros'));

    const result = (numA + numB) * numC;

    if (result < 50) reject(new Error('Valor muito baixo'));

    resolve(`(${numA} + ${numB}) x ${numC} = ${result}`);
  });

  return promise;
};

// Exercício 2
const randomA = Math.floor(Math.random() * 100 + 1);
const randomB = Math.floor(Math.random() * 100 + 1);
const randomC = Math.floor(Math.random() * 100 + 1);

// calculate(randomA, randomB, randomC)
//   .then(result => console.log(`Calculo efetuado: ${result}`))
//   .catch(err => console.log(`ERRO: ${err.message}`));

// Exercício 3
const calculateAsyncAwait = async (randomA, randomB, randomC) => {
  try {
    const result = await calculate(randomA, randomB, randomC);
    console.log(`Calculo efetuado: ${result}`);
  } catch (err) {
    console.log(`ERRO: ${err.message}`);
  }
};

calculateAsyncAwait(randomA, randomB, randomC);