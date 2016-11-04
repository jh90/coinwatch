const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const transactionRouter = require('./routes/transaction_router.js'),
      dataRouter = require('./routes/data_router.js'),
      userRouter = require('./routes/user_router.js'),
      saveRouter = require('./routes/save_router.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/users', userRouter);
app.use('/api/saves', saveRouter);
app.use('/api/data', dataRouter);
app.use('/api/transactions', transactionRouter);

module.exports = app;
