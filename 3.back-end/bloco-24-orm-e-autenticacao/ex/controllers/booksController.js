const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(Number(id));

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(book);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } = req.params;

    const updatedBook = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    return res.status(200).json(updatedBook);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Book.destroy({ where: { id } });

    return res.status(204).end();
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = router;