const firebase = require('../../firebase.config.js');
const daemon = require('superagent');

class SaveDAO {
  static all () {
    const savesRef = firebase.database().ref('/saves')
    return savesRef.once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  static visible (sid) {
    const saveRef = firebase.database().ref(`/saves/${sid}/published`);
    return saveRef.once('value').then((snapshot) => {
      const update = snapshot ? false : true;
      saveRef.set(update);
      return update;
    });
  }

  static delete (sid) {
    const saveRef = firebase.database().ref(`/saves/${sid}`);
    return saveRef.remove();
  }

  static createSnapshot () {

  }

  static createFrame () {

  }
}

module.exports = SaveDAO;
