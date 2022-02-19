const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'samuel',
  password: process.env.MYSQLPASSWORD,
  database: 'model_example',
  port: 3306,
});

module.exports = connection;
