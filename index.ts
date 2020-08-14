import express, { response } from 'express';
import path from 'path';
import mysql from 'mysql';

// Expressサーバーの用意
const app = express();
const port = process.env.PORT || 5000;

// MySQLに接続
const mySqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'faam_db',
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
