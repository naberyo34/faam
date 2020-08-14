import express from 'express';
import mysql from 'mysql';

// Expressサーバーの用意
const app = express();
const port = process.env.PORT || 5000;

// MySQLに接続
const mySqlConnection = mysql.createConnection({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.PASSWORD || '',
  database: process.env.DB_NAME || 'faam_db',
});

mySqlConnection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected.');
});

app.get('/', (_req, res) => {
  mySqlConnection.query('select * from users', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
