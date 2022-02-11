const { application } = require('express');
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

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter(drink => {
    return drink.name.includes(name);
  });

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/sorted', (_req, res) => {
  const sortedDrinks = drinks.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  return res.status(200).json(sortedDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find(drink => {
    return drink.id === parseInt(id);
  });
  
  if (!drink) return res.status(404).json({ message: 'Drink not found.' })
  
  return res.status(200).json(drink);
});

app.get('/drinks', (_req, res) => {
  return res.status(200).json(drinks);
});

app.listen(3002, () => {
  console.log('Server rondando na porta 3002');
});