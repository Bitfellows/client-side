'use strict';

var app = app || {};

(module => {

  const loginView = {};

  loginView.init = () => {
    $('.container').hide();
    $('.main-header').hide();
    $('#login').show();
    $('#create-user').show();
    $('#login-button').on('click',(e)=>{
      e.preventDefault();
      console.log('test');
      page('/overView')
    })
  }
  module.loginView = loginView;

})(app);