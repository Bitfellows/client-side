'use strict';

var app = app || {};

((module) => {
  const overView = {};

  overView.init = () => $('#overView').show();

  module.overView = overView;
})(app);