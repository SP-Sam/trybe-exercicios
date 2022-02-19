const connection = require('./connection');

async function getById(book_id) {
  const bookIdNumber = Number(book_id);
  const query = 'SELECT title FROM model_example.books WHERE id = ?;';
  
  const [book] = await connection.execute(query, [bookIdNumber]);

  if (book.length === 0) return null;

  return book[0].title;
}

async function getByAuthorId(author_id) {
  const idNumber = Number(author_id);

  const [booksByAuthorId] = await connection.execute(
    'SELECT title FROM model_example.books WHERE author_id = ?;',
    [idNumber],
  );

  const bookList = [];
  
  booksByAuthorId.map(book => bookList.push(book.title));

  return bookList;
}

async function getAll() {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;',
  );

  const bookList = [];
  
  books.map(book => bookList.push(book.title));

  return bookList;
}

async function hasAuthorId(id) {
  const query = 'SELECT first_name FROM model_example.authors WHERE id = ?;';
  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return false;

  return true;
}

function isValid(book, author_id) {
  const idNumber = Number(author_id);
  if (!book || book.length < 3) return false;
  if (idNumber === undefined) return false;

  return true;
}

async function create(book, author_id) {
  const idNumber = Number(author_id);
  const query = `INSERT INTO model_example.books (title, author_id)
    VALUES (?, ?);`;
  
  return connection.execute(query, [book, idNumber]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
  hasAuthorId,
}