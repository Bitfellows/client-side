'use strict';

var app = app || {};

(function(module) {
  const coinSearchView = {};
  coinSearchView.init = function() {
    $('.video-background').hide();
    $('.video-foreground').hide();
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
    let selectedValue = $('.select_location').get(0).selectedIndex;
    let coinQuantity = parseFloat($('#quantity').val());
    let defaultQty = $('#quantity').val();
    console.log(coinQuantity);
    let perCoinPrice = $('#coin-list').find('p').first().text().split(':')[1];
    if(coinQuantity>-1 && defaultQty!=='0.00' && selectedValue !== 0){
      coinSearchView.submit();
      var coinresult = coinQuantity * perCoinPrice;
      $('#resulttext').append(`${coinresult}`);
      $('#resulttext').fadeIn('slow');
    }
    else if(defaultQty!=='0.00' && coinQuantity>-1 && selectedValue ===0){
      alert('please select a coin');
    }
    else if(defaultQty === '0.00' && selectedValue === 0){
      alert('please select a coin & enter quantity')
    }
    else if(coinQuantity<=-1){
      alert(`Quantity can't be negative`);
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
    $('#resulttext').empty();
  });
  coinSearchView.initSearch = function() {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    //$('#delete-activity').hide();
    $('#coin-list').empty();
    $('#main-view').show();
    $('#search-view').show();
    $('#quantity').val('0.00')
    $('#resulttext').empty();
    coinSearchView.initChart();
    $('#chart-view').show();
    module.Crypto.all.map(coin => $('#coin-list').append(coin.toHtml()));
  }
  coinSearchView.initChart = function(){
    var c1 = 'black';
    var c2 = '#FFFAAE';
    var c3 = 'white';
    var c4 = '#5797df';
    // var c4 = '#FF8C00';
    var chart1Data = {
      labels: [
        app.Crypto.chartData[0].name,
        app.Crypto.chartData[5].name,
        app.Crypto.chartData[1].name,
        app.Crypto.chartData[3].name
      ],
      datasets: [
        {
          label: 'Current Price',
          backgroundColor: c1,
          data: [
            app.Crypto.chartData[0].price_usd,
            app.Crypto.chartData[5].price_usd,
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
            +(app.Crypto.chartData[5].percent_change_7d / 100) + +app.Crypto.chartData[5].price_usd,
            +(app.Crypto.chartData[1].percent_change_7d / 100) + +app.Crypto.chartData[1].price_usd,
            +(app.Crypto.chartData[3].percent_change_7d / 100) + +app.Crypto.chartData[3].price_usd,
          ]
        },
      ],
    };
    var chart2Data = {
      labels: [
        app.Crypto.chartData[0].name,
        app.Crypto.chartData[5].name,
        app.Crypto.chartData[1].name,
        app.Crypto.chartData[3].name
      ],
      datasets: [
        {
          label: '24h Volume USD',
          backgroundColor: c3,
          data: [
            app.Crypto.chartData[0]["24h_volume_usd"],
            app.Crypto.chartData[5]["24h_volume_usd"],
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
            app.Crypto.chartData[5].market_cap_usd,
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
          title: {display: true, fontSize:18, fontColor: 'black', text: 'Price to 7 Day Weighted Average:'},
          scales: {
            xAxes:[{
              ticks: {
                fontColor:'black',
              }
            }],
            yAxes:[{
              ticks: {
                fontColor:'black',
                fontSize:14,
              }
            }]
          }
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
          title: {display: true, fontSize:18, fontColor: 'black', text: '24 Hour Volume to US Market Cap:'},
          scales:{
            xAxes:[{
              ticks:{
                fontColor:'black',
                fontSize:14,
              }
            }],
            yAxes:[{
              ticks:{
                fontColor:'black',
              }
            }]
          }
        },
      })
    }
    makeChartA();
    makeChartB();
  };
  module.coinSearchView = coinSearchView;
})(app);