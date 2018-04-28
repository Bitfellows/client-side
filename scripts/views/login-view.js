'use strict';

var app = app || {};

(module => {

  const loginView = {};

  loginView.init = () => {
    $('#login').show();
  }
  module.loginView = loginView;

})(app);