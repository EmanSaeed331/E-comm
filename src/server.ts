import express from 'express';
import config from './configs/config';
import productRouter from './routes/product';
import userRouter from './routes/user';

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', productRouter);
app.listen(config.port, () =>
  console.log(`Server is running on port ${config.port}`)
);
