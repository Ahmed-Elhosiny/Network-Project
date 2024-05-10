const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes//reviewRoutes');

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('Connected to Mongo');
  })
  .catch((err) => console(err));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/reviews', reviewRouter);

app.listen(5000, () =>
  console.log('Server listening on port', 5000)
);
