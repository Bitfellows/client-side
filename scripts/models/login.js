'use strict';
/* global ENV */
var app = app || {};


(function(module) {

  function NewUser(logObj) {
    Object.keys(logObj).forEach(key => this[key] = logObj[key]);
  }
  NewUser.prototype.insertUser = function(callback) {
    console.log(`${ENV.apiUrl}/newUser`);
    $.post(`${ENV.apiUrl}/newUser`, this)
      .then(callback)
      .catch(err => {
        console.error(err);
      });
  };
  $('#create-user > form').on('submit',(e) => {
    console.log('I got here');
    e.preventDefault();
    let newUser = new NewUser({
      user_name: $('#username').val(),
      fname: $('#fname').val(),
      lname: $('#lname').val(),
      email: $('#email').val(),
    });
    console.log(newUser);
    alert('Thank you for creating a new account! Please login with your username and password.');
    $('#newUser input[type="text"]').val('');
    $('#newUser input[type="password"]').val('');
    newUser.insertUser();

  });

  module.NewUser = NewUser;

})(app);
