import express from 'express';
import config from './configs/config';
import userRouter from './routes/user';

const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.listen(config.port, () =>
  console.log(`Server is running on port ${config.port}`)
);
