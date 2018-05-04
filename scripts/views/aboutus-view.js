'use strict';

var app = app || {};

(module => {

  const aboutView = {};

  aboutView.init = () => {
    $('.video-background').hide();
    $('.video-foreground').hide();
    $('#login').hide();
    $('#create-user').hide();
    $('#overView').hide();
    $('#mybitView').hide();
    $('.main-header').show();
    $('#aboutView').show();
  }

  module.aboutView = aboutView;

})(app);

