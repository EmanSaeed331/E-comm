import express from 'express';
import config from './configs/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express With TypeScript ');
});

app.listen(config.port, () =>
  console.log(`Server is running on port ${config.port}`)
);
