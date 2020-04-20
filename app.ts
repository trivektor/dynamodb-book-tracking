import express from 'express';

import routes from './routes';

const PORT = 5000;

const app = express();

app.use(routes);
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
