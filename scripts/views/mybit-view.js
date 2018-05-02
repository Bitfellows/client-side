'use strict';

var app = app || {};

(module => {

  const mybitView = {};

  mybitView.init = () => {
    $('#mybitView').show();
    $('#mybitView-list').empty();
    module.Crypto.mybit.map(bit => $('#mybitView-list').append(bit.mybitToHtml()));
  }
  module.mybitView = mybitView;

})(app);