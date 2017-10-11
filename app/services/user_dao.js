const firebase = require('../../firebase.config.js');
const daemon = require('superagent');

const User = require('../models/user.js');

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

  // static edit () {

  // }
}

module.exports = UserDAO;
