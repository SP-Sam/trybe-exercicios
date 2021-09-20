const sumRandomNumbers = () => {
  const arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.pow(Math.ceil(Math.random()  * 50), 2));
  }

  const sum = arr.reduce((acc, value) => acc + value);

  if (sum >= 8000) throw new Error();

  return sum;
};

const sumArrayFromSum = (sum) => {
  const numbers = [2, 3, 5, 10];
  const divisions = [];

  numbers.map(number =>
    divisions.push(parseFloat((sum / number).toFixed(2))))
  
  console.log(divisions);
  
  const sum2 = divisions.reduce((acc, curr) => acc + curr, 0);

  console.log(`Soma do valores acima = ${sum.toFixed(2)}`);

  return divisions;
}

const fetchPromise = async () => {
  try {
    const sum3 = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum3);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
