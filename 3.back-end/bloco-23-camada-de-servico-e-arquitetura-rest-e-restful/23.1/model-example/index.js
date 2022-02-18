const bodyParser = require('body-parser');
const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

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

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = await Book.getByAuthorId(author_id);

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const isValid = Book.isValid(title, author_id);
  const hasAuthorId = await Book.hasAuthorId(author_id);

  if (!isValid || !hasAuthorId) return res.status(400).json({ message: 'Invalid data' });

  await Book.create(title, author_id);

  return res.status(201).json({ message: 'Book created successfully' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});