import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 5000;

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (_req, res) => {
    res.render('index');
  });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
