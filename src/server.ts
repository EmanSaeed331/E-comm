import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express With TypeScript ');
});

app.listen(8080, () => console.log('Server is running on port'));
