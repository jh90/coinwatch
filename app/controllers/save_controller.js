const firebase = require('../../firebase.config.js');
const daemon = require('superagent');
const saveDAO = require('../services/save_dao.js');
const Save = require('../models/save.js');

class SaveController {
  static getPublishedSaves (req, res) {
    saveDAO.all().on('value', (snapshot) => {
      const saves = $.map(snapshot, (save, sid) => {
        if (save.published) {
          save['id'] = sid;
          const saveModel = new Save(save);
          return saveModel;
        }
      });
      res.status(200).send(saves);
    });
  }

  static getSavesByUser (req, res) {
    const uid = req.body.uid;
    saveDAO.all().on('value', (snapshot) => {
      const saves = $.map(snapshot, (save, sid) => {
        if (save.user_id === uid) {
          save['id'] = sid;
          const saveModel = new Save(save);
          return saveModel;
        }
      });
      res.status(200).send(saves);
    });
  }

  static changeVisibility (req, res) {

  }

  static deleteSave (req, res) {

  }

  static saveSnapshot (req, res) {

  }

  static saveFrame (req, res) {

  }
}

module.exports = SaveController;
