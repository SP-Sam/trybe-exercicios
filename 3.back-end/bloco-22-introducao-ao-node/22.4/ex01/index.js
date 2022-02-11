const express = require('express');

const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  return res.json(drinks);
});

app.get('/drinks/sorted', (_req, res) => {
  const sortedDrinks = drinks.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  return res.json(sortedDrinks);
});

app.listen(3001, () => {
  console.log('Server rondando na porta 3001');
});