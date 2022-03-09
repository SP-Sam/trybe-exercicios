const express = require('express');
const bodyParser = require('body-parser');

const BooksController = require('./controllers/booksController');
const ErrorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(bodyParser.json());

app.use('/books', BooksController);
app.use(ErrorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});