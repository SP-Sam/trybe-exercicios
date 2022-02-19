const connection = require('./connection');

function getNewAuthor({ id, firstName, middleName, lastName }) {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
}

function serialize(authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
}

async function findById(id) {
  const idNumber = Number(id);
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';
  const [ authorData ] = await connection.execute(query, [idNumber]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    idNumber,
    firstName,
    middleName,
    lastName,
  });
}

async function getAll() {
  const [ authors ] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(serialize).map(getNewAuthor);
}

function isValid(first_name, middle_name, last_name) {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;
  if (middle_name && typeof middle_name !== 'string') return false;

  return true;
}

async function create(firstName, middleName, lastName) {
  const query = `INSERT INTO model_example.authors (first_name, middle_name, last_name) 
    VALUES (?, ?, ?);`
  
  return connection.execute(query, [firstName, middleName, lastName])
}

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};