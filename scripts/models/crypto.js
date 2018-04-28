'use strict';
var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://bitfellows.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {

  function Crypto(marketDataObj){
    Object.keys(marketDataObj).foreach(key => this[key] = marketDataObj[key])
  }
  Crypto.prototype.toHtml = function() {
    let template = Handlebars.compile($('#coin-results-template').text());
    return template(this);
  }
  Crypto.all = [];
  Crypto.loadAll = rows => Crypto.all = rows.map(Crypto => new Crypto(Crypto));
  Crypto.fetchAll = (name) =>
    $.getJSON(`${ENV.apiUrl}/api/v1/coins/${name}`)
      .then(Crypto.loadAll)


  Crypto.one = [];
  Crypto.fetchCoin = (name) =>
    $.getJSON(`${ENV.apiUrl}/api/v1/coins/${name}`)
      .then(results => Crypto.one = results.map(coin => new Crypto(coin)))
  
  module.Crypto = Crypto;

})(app);