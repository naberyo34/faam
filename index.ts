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

export const handleDisconnectMySql = () => {
  connection.connect((err) => {
    if (err) {
      console.log('MySQL err: ', err, 'try reconnecting ...');
      // 2秒後に再接続を試みる
      setTimeout(handleDisconnectMySql, 2000);
    }
  });

  connection.on('error', (err) => {
    console.log('MySQL err: ', err);

    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnectMySql();
    } else {
      console.log('FATAL ERR.');
      throw err;
    }
  });
};

handleDisconnectMySql();

app.get('/', (_req, res) => {
  res.send('this is API Route. Hello Express.');
});

// routes/v1/index.tsをrouterとして宣言
app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
