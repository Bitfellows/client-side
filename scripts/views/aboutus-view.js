'use strict';

var app = app || {};

(module => {

  const aboutView = {}

  aboutView.init = () => $('#aboutView').show()

  module.aboutView = aboutView

})(app)