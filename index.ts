import express from 'express';
import mongoose = require('mongoose');
import router from './routes/v1';

// Expressサーバーの用意
const app = express();
const port = process.env.PORT || 5000;

// CORS関連設定
export const corsOptions = {
  origin: 'https://faam-spa.netlify.app/',
  methods: 'GET, PUT',
  optionsSuccessStatus: 200,
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jsonAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (_req, res) => {
  res.send('Hello Express.');
});

// routes/v1/index.tsをrouterとして宣言
app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
