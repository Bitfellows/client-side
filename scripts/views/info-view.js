'use strict';

var app = app || {};

((module) => {
  const overView = {};

  overView.init = () => {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    $('.main-header').show();
    // $('#navHeader').show();
    $('#overView').show();
  }

  module.overView = overView;
})(app);
