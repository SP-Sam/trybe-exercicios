const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.name.includes(name) &&
      recipe.price < parseInt(maxPrice) &&
      recipe.price >= parseInt(minPrice)
    );
  });
  
  return res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }
  
  return res.status(200).json(recipe);
});

app.get('/recipes', (_req, res) => {
  return res.status(200).json(recipes);
});

app.listen(3001, () => {  
  console.log('Servidor rodando na porta 3001');
});