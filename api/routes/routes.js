'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // Routes
  app.route('/test')
    .get(user.test);
  app.route('/august')
    .get(user.august);


    // User
    app.route('/signup')
    .post(user.signup);

    app.route('/signin')
    .post(user.signin);


};
