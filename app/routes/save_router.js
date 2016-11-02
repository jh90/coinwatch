const express = require('express');
const SaveController = require('../controllers/save_controller.js');

const router = express.Router();

//get all published saves
router.get('/public', SaveController.getPublishedSaves);
//get saves by user
router.get('/user/:id', SaveController.getSavesByUser);
//publish or unpublish existing save
router.patch('/:id', SaveController.changeVisibility);
//delete save
router.delete('/:id', SaveController.deleteSave);
//new saves
router.post('/snapshot', SaveController.saveSnapshot);
router.post('/frame', SaveController.saveFrame);

module.exports = router;
