const express = require('express');
const UserController = require('../controllers/user_controller.js');

const router = express.Router();

router.post('/', UserController.signUp);
router.post('/login', UserController.logIn);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.editUserInfo); //name, email, address(es)

module.exports = router;
