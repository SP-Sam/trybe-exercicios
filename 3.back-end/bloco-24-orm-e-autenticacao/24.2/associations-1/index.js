const express = require('express');
const { Address, Employee } = require('./models');

const app = express();
app.use(express.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
