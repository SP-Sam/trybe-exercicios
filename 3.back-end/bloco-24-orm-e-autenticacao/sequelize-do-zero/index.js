const express = require('express');
const { Store } = require('./models');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  Store.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ message: 'Algo deu errado!' });
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});