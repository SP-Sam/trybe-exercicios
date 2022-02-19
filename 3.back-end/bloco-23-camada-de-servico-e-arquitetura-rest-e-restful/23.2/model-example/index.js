const bodyParser = require('body-parser');
const express = require('express');

const Author = require('./models/AuthorModel');
const BookController = require('./controllers/BookController');
const ErrorController = require('./controllers/ErrorController');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found!' });

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const isValid = Author.isValid(first_name, middle_name, last_name);

  if (!isValid) return res.status(400).json({ message: 'Invalid data' });

  await Author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: 'Author created successfully' });
});

app.get('/books', BookController.getByAuthorId);
app.get('/books/:id', BookController.getById);
app.post('/books', BookController.create);
app.use(ErrorController);

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});