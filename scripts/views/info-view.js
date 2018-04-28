'use strict';

var app = app || {};

(function(module) {
  const overView = {};

  overView.init = () => $('.overView').show();

  module.overView = app.overView;
})(app);