'use strict';

var app = app || {};

(function(module) {
  const coinSearchView = {};
  coinSearchView.init = function() {
    $('#login').hide();
    $('#create-user').hide();
    // $('#delete-activity').hide();
    $('#main-view').show();
  }
  $('.select_location').on('change', function(){
    if($(this).val() === 'btc'){
      page('/coins/btc')
    }
    if($(this).val() === 'ltc'){
      page('/coins/ltc')
    }
    if($(this).val() === 'eth'){
      page('/coins/eth')
    }
    if($(this).val() === 'bch'){
      page('/coins/bch')
    }
    
  });
  coinSearchView.initSearch = function() {
    $('#login').hide();
    $('#create-user').hide();
    //$('#delete-activity').hide();
    $('#coin-list').empty();
    $('#main-view').show();
    $('#search-view').show();
    module.Crypto.all.map(coin => $('#coin-list').append(coin.toHtml()));
  }
  module.coinSearchView = coinSearchView;
})(app);