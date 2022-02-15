const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;

  if (token.length !== 16) {
    return res.status(401).json({ message: 'Invalid Token!' });
  }

  res.status(200).json({ message: 'Valid Token!' });
});

app.get('/recipes', (_req, res) => {
  return res.status(200).json(recipes);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  
  const filteredRecipes = recipes.filter(recipe => (
    recipe.name.includes(name) &&
    recipe.price < parseInt(maxPrice) &&
    recipe.price >= parseInt(minPrice)
  ));
  
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


app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;

  recipes.push({ id, name, price });

  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));

  console.log(recipeIndex);
  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  
  const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Route ${req.path} not found!` });
});

app.listen(3001, () => {  
  console.log('Server running on 3001 port');
});