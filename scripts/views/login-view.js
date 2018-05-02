'use strict';

var app = app || {};

(module => {

  const loginView = {};

  loginView.init = () => {
    $('#aboutView').hide();
    $('.container').hide();
    $('.main-header').hide();
    $('#login').show();
    $('#create-user').show();
    $('#login-button').click((e)=>{
      e.preventDefault();
      page('/overView')
    })
  }
  module.loginView = loginView;

})(app);