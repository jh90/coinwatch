const userDAO = require('../services/user_dao.js');

class UserController {
  static signUp (req, res) {
    const { user, name, password } = req.body;
    userDAO.create(user, name, password).then((response) => {
      res.status(200);
    });
  }

  static logIn (req, res) {
    console.log('controller');
    console.log(req.body);
    const { user, password } = req.body;
    userDAO.login(user, password).then((response) => {
      res.status(200).json(response);
      console.log('controller');
    });
  }

  static addAddress (req, res) {

  }

  static getAddresses (req, res) {

  }
}

module.exports = UserController;
