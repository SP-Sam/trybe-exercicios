const BookModel = require('../models/BookModel');
const validation = require('../models/validations');

function isValid(book, author_id) {
  const idNumber = Number(author_id);
  if (!book || book.length < 3) return false;
  if (idNumber === undefined) return false;

  return true;
}

async function hasAuthorId(author_id) {
  const idNumber = Number(author_id);
  const author = await validation.hasAuthorId(idNumber);

  if (author.length === 0) return false;

  return true;
}

async function getAll() {
  const books = await BookModel.getAll();

  const bookList = [];
  
  books.map(book => bookList.push(book.title));

  return bookList;
}

async function getById(book_id) {
  const bookIdNumber = Number(book_id);
  const book = await BookModel.getById(bookIdNumber);

  if (book.length === 0) return null;

  return book[0].title;
}

async function getByAuthorId(author_id) {
  const idNumber = Number(author_id);
  const booksByAuthorId = await BookModel.getByAuthorId(idNumber);

  const bookList = [];
  
  booksByAuthorId.map(book => bookList.push(book.title));

  return bookList;
}

async function create(book, author_id) {
  const idNumber = Number(author_id);
  return BookModel.create(book, idNumber);
}

module.exports = {
  getAll,
  getById,
  getByAuthorId,
  create,
  hasAuthorId,
  isValid,
};