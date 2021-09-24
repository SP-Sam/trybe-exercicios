const generateRandomNumber = () => {
  return Math.floor(Math.random() * 101);
}

const toUpperCase = (str) => {
  return str.toUpperCase();
}

const firstLetter = (str) => {
  return str[0];
}

const concat = (str1, str2) => {
  return `${str1}${str2}`;
}

const fetchDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const toJson = await response.json();
  return toJson;
}

module.exports = { generateRandomNumber, toUpperCase, firstLetter, concat, fetchDog};