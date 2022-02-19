const connection = require('./connection');

async function hasAuthorId(id) {
  const query = 'SELECT first_name FROM model_example.authors WHERE id = ?;';
  const [author] = await connection.execute(query, [id]);

  return author;
}

module.exports = { hasAuthorId };