'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://bitfellows.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {

  function NewUser(logObj) {
    Object.keys(logObj).forEach(key => this[key] = logObj[key]);
  }
  $('.create-user').on('submit',() => {
    let newUser = new NewUser({
      user_name: $('#username').val(),
      fName: $('#fname').val(),
      lName: $('#lname').val(),
    });

    NewUser.prototype.insertUser = function(callback) {
      $.post(`${ENV.apiUrl}/login`, newUser)//{user_name: this.user_name, fName: this.fName, lName: this.lName})
        .then(callback)
        .catch(err => {
          console.error(err);
        });
    };

  });


  module.NewUser = NewUser;

})(app);