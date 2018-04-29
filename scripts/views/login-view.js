'use strict';

var app = app || {};

(module => {

  const loginView = {};

  loginView.init = () => {
    $('.container').hide();
    $('.main-header').hide();
    $('#login').show();
    $('#create-user').show();
  }
  module.loginView = loginView;

})(app);