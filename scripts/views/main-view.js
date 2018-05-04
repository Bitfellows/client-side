'use strict';

var app = app || {};

(function(module) {
  const coinSearchView = {};
  coinSearchView.init = function() {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    // $('#delete-activity').hide();
    console.log(module.Crypto.chartData)
    $('#reset').click();
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
  $('#calculate').on('click',(event)=>{
    event.preventDefault();
    let perCoinPrice = $('#coin-list').find('p').first().text().split(':')[1];
    if(parseInt($('#quantity').val())>-1){
      coinSearchView.submit();
      var coinresult = (parseInt($('#quantity').val()) * perCoinPrice);

      console.log(coinresult);

      $('#resulttext').append(`${coinresult}`);
      $('#resulttext').fadeIn('slow');

    }
    else{
      alert('please enter quantity');
    }
  })
  coinSearchView.submit = () =>{
    //event.preventDefault();
    let cryptoObj = {
      user_name:  module.loginView.user_name,
      coin:  $('.select_location').val(),
      qty: $('#quantity').val()
    };
    console.log(cryptoObj);
    let myBit = new module.Crypto(cryptoObj);
    console.log(myBit);
    myBit.insertRecord();
  }
  $('#reset').on('click',function(){
    $('.select_location').get(0).selectedIndex = 0;
    $('#quantity').val('0.00')
  });
  coinSearchView.initSearch = function() {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    //$('#delete-activity').hide();
    $('#coin-list').empty();
    $('#main-view').show();
    $('#search-view').show();
    coinSearchView.initChart();
    $('#chart-view').show();
    module.Crypto.all.map(coin => $('#coin-list').append(coin.toHtml()));
  }
  coinSearchView.initChart = function(){
    var c1 = 'black';
    var c2 = 'gold';
    var c3 = 'tan';
    var c4 = 'gray';
    var chart1Data = {
      labels: [
        app.Crypto.chartData[0].name,
        app.Crypto.chartData[6].name,
        app.Crypto.chartData[1].name,
        app.Crypto.chartData[3].name
      ],
      datasets: [
        {
          label: 'Current Price',
          backgroundColor: c1,
          data: [
            app.Crypto.chartData[0].price_usd,
            app.Crypto.chartData[6].price_usd,
            app.Crypto.chartData[1].price_usd,
            app.Crypto.chartData[3].price_usd,
            0
          ]
        },
        {
          label: '7d Average',
          backgroundColor: c2,
          data: [
            +(app.Crypto.chartData[0].percent_change_7d / 100) + +app.Crypto.chartData[0].price_usd,
            +(app.Crypto.chartData[6].percent_change_7d / 100) + +app.Crypto.chartData[6].price_usd,
            +(app.Crypto.chartData[1].percent_change_7d / 100) + +app.Crypto.chartData[1].price_usd,
            +(app.Crypto.chartData[3].percent_change_7d / 100) + +app.Crypto.chartData[3].price_usd,
          ]
        },
      ],
    };
    var chart2Data = {
      labels: [
        app.Crypto.chartData[0].name,
        app.Crypto.chartData[6].name,
        app.Crypto.chartData[1].name,
        app.Crypto.chartData[3].name
      ],
      datasets: [
        {
          label: '24h Volume USD',
          backgroundColor: c3,
          data: [
            app.Crypto.chartData[0]["24h_volume_usd"],
            app.Crypto.chartData[6]["24h_volume_usd"],
            app.Crypto.chartData[1]["24h_volume_usd"],
            app.Crypto.chartData[3]["24h_volume_usd"],
            0
          ]
        },
        {
          label: 'US Market Cap',
          backgroundColor: c4,
          data: [
            app.Crypto.chartData[0].market_cap_usd,
            app.Crypto.chartData[6].market_cap_usd,
            app.Crypto.chartData[1].market_cap_usd,
            app.Crypto.chartData[3].market_cap_usd
          ]
        },
      ],  
    };
    function makeChartA (){
      var ctx = $('#chartA');
      var priceChartA = new Chart(ctx, {
        type: 'bar',
        data: chart1Data,
        options: {
          responsive: true,
          legend: {display: false},
          title: {display: true, fontColor: 'black', text: 'Price to 7 Day Weighted Average:'}
        },
      })
    }
    function makeChartB (){
      var ctx = $('#chartB');
      var priceChartB = new Chart(ctx, {
        type: 'bar',
        data: chart2Data,
        options: {
          responsive: true,
          legend: {display: false},
          title: {display: true, fontColor: 'black', text: '24 Hour Volume to US Market Cap:'}
        },
      })
    }
    makeChartA();
    makeChartB();
  };
  module.coinSearchView = coinSearchView;
})(app);