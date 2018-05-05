'use strict';

var app = app || {};

((module) => {
  const overView = {};

  overView.init = () => {
    $('.video-background').hide();
    $('.video-foreground').hide();
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    $('.main-header').show();
    $('#overView').show();
  }

  module.overView = overView;
})(app);
