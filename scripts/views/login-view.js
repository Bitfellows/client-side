'use strict';

var app = app || {};

(module => {

  const loginView = {};

  loginView.init = () => {
    $('.container').hide();
    $('#aboutView').hide();
    $('.main-header').hide();
    $('.video-background').show();
    $('.video-foreground').show();
    $('#login').show();
    $('#create-user').show();
    $('#login-button').click((e)=>{
      e.preventDefault();
      var user_name = $('#user_name').val()
      loginView.user_name = user_name;
      if(user_name.length<2){
        alert('ENTER USERNAME & PASSWORD');
      }
      else{
        page('/overView')
      }
    })
  }
  
  module.loginView = loginView;

})(app);