import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the container dev');
});

const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});