const firebase = require('../../firebase.config.js');
const daemon = require('superagent');

class UserDAO {
  static create (user, name, password) {
    return firebase.auth()
            .createUserWithEmailAndPassword(user, password)
            .then((registrant) => {
              registrant.updateProfile({displayName: name});
              firebase.database().ref('users')
                      .child(registrant.uid)
                      .set({displayName: name, email: user, id: registrant.uid})
            });
  }

  static login (user, password) {
    console.log('dao');
    return firebase.auth()
      .signInWithEmailAndPassword(user, password)
      .catch((err) => {
        console.log(`${err.code} ${err.message}`);
      })
      .then(() => {
        console.log('firebase');
      });
  }

  static delete () {
    firebase.auth()
  }

  static edit () {

  }
}

module.exports = UserDAO;
