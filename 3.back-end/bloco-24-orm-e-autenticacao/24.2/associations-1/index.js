const express = require('express');
const Sequelize = require('sequelize');
const config = require('./config/config');

const { Address, Employee } = require('./models');
const { Book, User } = require('./models');

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config.development);

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

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findOne({
        where: { id },
        // include: [{
        //   model: Address,
        //   as: 'addresses',
        //   attributes: { exclude: ['number'] },
        // }],
      });

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' }); 
    }
    if (req.query.includeAddresses === 'true') {
      const addresses = Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses })
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.post('/employees', async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    await t.rollback();
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
