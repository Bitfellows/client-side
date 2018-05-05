'use strict';

var app = app || {};

(module => {

  const mybitView = {};

  mybitView.init = () => {
    $('#login').hide();
    $('#create-user').hide();
    $('#overView').hide();
    $('#update-form').hide();
    $('#clear-activity').hide();
    $('#mybitView-list').empty();
    $('#mybitView').show();
    $('.main-header').show();
    module.Crypto.mybit.map(bit => $('#mybitView-list').append(bit.mybitToHtml()));
  }

  $('#update').click(function () {
    $('#update-form').show();
  });

  $('#clear').click(function () {
    $('#clear-activity').show();
  });

  $('.close').click(function(){
    $('#clear-activity').hide();
  });
  $('.close').click(function(){
    $('#update-form').hide();
  });
  $('#save').click(function (event) {
    alert('Successfully saved');
    event.preventDefault();
    page('/mybit');
  });

  module.mybitView = mybitView;

})(app);

