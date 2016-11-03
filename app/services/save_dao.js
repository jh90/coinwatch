const firebase = require('../../firebase.config.js');
const daemon = require('superagent');

class SaveDAO {
  static all () {
    const saveRef = firebase.database().ref('/saves');
    return saveRef;
  }

  static changeVisibility () {

  }

  static delete () {

  }

  static saveSnapshot () {

  }

  static saveFrame () {

  }
}

module.exports = SaveDAO;
