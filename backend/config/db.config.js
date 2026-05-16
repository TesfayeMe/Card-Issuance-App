//db connection
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
if (!db) {
  console.error('Failed to connect to the database');
} else {
  console.log('Connected to the database');
}
module.exports = db;
