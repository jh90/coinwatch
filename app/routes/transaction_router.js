const express = require('express');
const TransactionController = require('../controllers/transaction_controller.js');

const router = express.Router();

//post new tx
router.post('/send', TransactionController.sendTransaction);
//get tx status
router.get('/status/:id', TransactionController.checkTransactionStatus);
//get user tx history
router.get('/user/:id', TransactionController.getTransactionsByUser);
//get shapeshift max tx val by base coin
router.get('/limit', TransactionController.checkDepositLimit);


module.exports = router;
