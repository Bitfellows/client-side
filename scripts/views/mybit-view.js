'use strict';

var app = app || {};

(module => {

  const mybitView = {};

  mybitView.init = () => {
    $('#mybitView').show();
  }
  module.mybitView = mybitView;

})(app);