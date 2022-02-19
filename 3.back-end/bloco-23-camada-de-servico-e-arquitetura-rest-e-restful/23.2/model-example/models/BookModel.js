const connection = require('./connection');

async function getAll() {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;',
  );

  return books;
}

async function getById(book_id) {
  const query = 'SELECT title FROM model_example.books WHERE id = ?;';
  
  const [book] = await connection.execute(query, [book_id]);

  return book;
}

async function getByAuthorId(author_id) {
  const [booksByAuthorId] = await connection.execute(
    'SELECT title FROM model_example.books WHERE author_id = ?;',
    [author_id],
  );

  return booksByAuthorId;
}

async function create(book, author_id) {
  const query = `INSERT INTO model_example.books (title, author_id)
    VALUES (?, ?);`;
  
  return connection.execute(query, [book, author_id]);
}

module.exports = {
  getAll,
  getById,
  getByAuthorId,
  create,
}