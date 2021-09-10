// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Laranja', 'Uva'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));