import express from 'express';
import mysql from 'mysql';
import router from './routes/v1';

// Expressサーバーの用意
const app = express();
const port = process.env.PORT || 5000;

// MySQLに接続
const settings = {
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'faam_db',
};
export const connection = mysql.createConnection(settings);

app.get('/', (_req, res) => {
  res.send('Hello Express.');
});

// routes/v1/index.tsをrouterとして宣言
app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
