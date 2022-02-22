const mysql = require('mysql2/promise');
require('dotenv').config;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'samuel',
  password: process.env.MYSQL_PASSWORD,
  database: 'rest_exercicios',
});

module.exports = connection;