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
      var user_name = $('#user_name').val()
      loginView.user_name = user_name;
      //console.log(user_name.length);
      if(user_name.length<1){
        alert('ENTER USERNAME & PASSWORD');
      }
      else{
        page('/overView')
      }
    })
  }
  
  module.loginView = loginView;

})(app);