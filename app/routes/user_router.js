const express = require('express');
const userController = require('../controllers/user_controller.js');

const router = express.Router();

router.post('/', userController.signUp);
router.post('/login', userController.logIn);
router.put('/:id', userController.addAddress);
router.get('/:id', userController.getUserAddresses);

module.exports = router;
