const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const TransactionRouter = require('./routes/transaction_router.js'),
      PriceRouter = require('./routes/price_router.js'),
      UserRouter = require('./routes/user_router.js'),
      SaveRouter = require('./routes/save_router.js'),
      VolumeRouter = require('./routes/volume_router');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/users', userRouter);
app.use('/api/saves', saveRouter);
app.use('/api/prices', priceRouter);
app.use('/api/volumes', volumeRouter);
app.use('/api/transactions', transactionRouter);

module.exports = app;
