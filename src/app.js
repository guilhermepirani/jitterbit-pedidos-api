import express from 'express';
import { initDb } from './storage/db/connection.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello!');
});

initDb().then(() => {
  app.listen(port, () =>
    console.log(`Jitterbit-pedidos-api listening on port ${port}`)
  );
});
