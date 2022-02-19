const BookService = require('../services/BookService');

async function getById(req, res, _next) {
  const { id } = req.params;

  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });
  
  return res.status(200).json(book);
}

async function getByAuthorId(req, res, _next) {
  const { author_id } = req.query;
  const books = await BookService.getByAuthorId(author_id);
  
  return res.status(200).json(books);
}

async function create(req, res, _next) {
  const { title, author_id } = req.body;

  const isValid = BookService.isValid(title, author_id);
  const hasAuthorId = await BookService.hasAuthorId(author_id);

  if (!isValid || !hasAuthorId) return res.status(400).json({ message: 'Invalid data' });

  await BookService.create(title, author_id);

  return res.status(201).json({ message: 'Book created successfully' });
}

module.exports = {
  getById,
  getByAuthorId,
  create,
};