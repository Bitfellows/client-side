'use strict';

var app = app || {};

(function(module) {
  const coinSearchView = {};
  coinSearchView.init = function() {
    $('#main-view').show();
    module.Crypto.all.map(coin => $('#coin-list').append(coin.toHtml()));
  }
  module.coinSearchView = coinSearchView;
})(app);